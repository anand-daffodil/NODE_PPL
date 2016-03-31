var passport = require('passport');
var usersApi = require('../api/users');

localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(username, password, done) {
        console.log("..here in username", username);
        console.log("..here in password", password);
        usersApi.find({ 'email': username }, function(err, user) {
            console.log(user);
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: "Incorrect username." });
            }
            if (user.password !== password) {
                return done(null, false, { message: "Incorrect password." });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    console.log("..passport serializeUser")
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    console.log("..passport...deserializeUser", id)
    usersApi.find({ '_id': id }, function(err, user) {
        console.log("..ghello", err);
        console.log("..oo o hello", user);
        done(err, user);
    });
});

module.exports = passport;
