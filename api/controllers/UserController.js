/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

module.exports = {
    profile: function(req, res) {
        if (req.user && req.user.username.toLowerCase() == req.param('id').toLowerCase())
            if (req.session.authenticated)
                return res.ok({
                    profile: req.user,
                    sameUser: true
                });
            else
                return res.ok({
                    profile: req.user
                });

        User.findOne({
            username: req.param('id')
        }, function(err, user) {
            if (!user) return res.badRequest();

            delete user.email;
            delete user.updatedAt;
            delete user.createdAt;
            delete user.sessionToken;

            return res.ok({
                profile: user
            });
        });
    },
    me: function(req, res) {
        res.send({
            user: req.user
        }).end();
    },
    logout: function(req, res) {
        req.session.authenticated = false;
        res.cookie('user', null, {
            HttpOnly: true
        });
        res.forbidden('Logout');
    },
    // NORMAL LOGIN 
    create: function(req, res) {
        var all = req.body[0].split('|');

        if (all.length < 5)
            return res.badRequest('Invalid form.');
        else {
            var user = {
                firstName: all[0],
                lastName: all[1],
                username: all[2],
                email: all[3],
                password: all[4],
                agree: Boolean(all[5])

            };
            User.create(user, function(err, user) {
                var finalErr = '';

                if (err) {
                    for (attribute in err.invalidAttributes) {
                        finalErr += '* - ' + err.invalidAttributes[attribute][0]['message'] + '<br/>'
                    }
                    return res.badRequest(finalErr);
                }

                delete user.password;
                delete user.agree;
                delete user.createdAt;
                delete user.updatedAt;
                delete user.emailVerified;
                delete user.sessionToken;

                var token = functions.createUserToken(user);
                delete user.id;

                req.session.authenticated = true;

                res.cookie('user', 'T ' + token, {
                    HttpOnly: true
                });
                res.send({
                    token: token,
                    user: user
                });

            });
        }
    },
    // NORMAL LOGIN 
    signIn: function(req, res) {
        if (!req.isSocket) {
            var all = req.body[0].split('|');
            var email = all[0];
            var password = all[1];

            function login(email, password) {
                if (validateEmail(email)) {
                    var find = {
                        email: email,
                        password: password
                    }
                } else
                    var find = {
                        username: email,
                        password: password
                    }

                User.findOne(find, function(err, existingUser) {
                    if (err) return res.badRequest(err);

                    if (existingUser) {
                        var token = functions.createUserToken(existingUser);
                        delete existingUser.id;

                        req.session.authenticated = true;

                        res.cookie('user', 'T ' + token, {
                            HttpOnly: true
                        });
                        res.send({
                            token: token,
                            user: existingUser
                        });

                    } else return res.badRequest('The email and password you entered don\'t match');
                });
            }

            login(email, password);
        } else {
            var socket = req.socket,
                io = sails.io,
                headers = req.headers,
                userId = functions.decodeAuthToken(headers.authorization).sub;
            userSessionToken = functions.decodeAuthToken(headers.authorization).sessionToken;

            // if (io.sockets.adapter.rooms && io.sockets.adapter.rooms[userId])
            var roomClients = io.sockets.adapter.rooms[userId];
            // else var roomClients = null;

            // var cookieID = headers.cookie.split('sails.sid=')[1].split(';');
            // var cookieIDEncoded = functions.createToken(cookieID[0]);
            // res.send(cookieIDEncoded);

            if (!roomClients) {
                socket.join(userId);
                res.ok('Ready');

            } else if (roomClients && !roomClients[socket.id]) {
                socket.join(userId);
                // var now = new time.Date();

                socket.broadcast.to(userId).emit('notifications', {
                    image: "/images/notif.png",
                    what: "New project",
                    who: "Jonlov",
                    notes: "New hiphop rap."
                        // time: Math.floor(now.setTimezone('UTC'))
                });
                res.ok('Ready');
            }

        }
    }
};