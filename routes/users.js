var express = require('express');
var router = express.Router();
var usersApi = require('../api/users');
var emailService = require('../config/config').emailService;
var emailServiceProvider = require(emailService.providerApi)(emailService.username, emailService.password);
var passport = require('../passports/passportConfig');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/**
@api {post} /users/register Register new user
@apiName RegisterUser
@apiGroup Users
@apiDescription After successful registration send mail to the user
@apiSuccess {json} user User information
@apiError {Error} error Error message
@apiSuccessExample {Boolean} Success-Response:
true
*/

router.post('/register', function(req, res, next) {
    var data = req.body;
    usersApi.insert(data, function(err, data) {
        if (err) {
            console.log("error in server");
            res.send(err.message);
        } else {
            console.log("request approved");
            console.log(req.body.email);
            var mail = {
                from: "ppl",
                to: req.body.email,
                subject: "registration greetings",
                text: "congratulations: You have successfully registered at 'PPT'",
                'html': "<h3>Thank you</h3>"
            };
            emailServiceProvider.send(mail, function(err, data) {
                if (err) {
                    console.log("error sending mail");
                    res.send(err.message);
                } else {
                    console.log('congratulation mail sent');
                    res.send(true);
                }
            });

        }
    });
});

/**
@api {post} /users/login Authenticate user with passport
@apiName UserLogin
@apiGroup Users
@apiSuccess {json} user User information
@apiError {Error} error Error message
@apiSuccessExample {json} Success-Response:
{
  "_id": "56c2aded22ee1b32272e40f8",
  "email": "anand.yadav@daffodilsw.com",
  "username": "sunilyadav"
}
*/

router.post('/login',
    passport.authenticate('local'),
    function(req, res, next) {
        console.log("entered next callback");
        var data = req.body;
        usersApi.find(data, { _id: 1, username: 1, email: 1 }, function(err, data) {
            if (err) {
                console.log("error login/retrieving info");
                res.send(err.message);
            } else {
                console.log("login request approved");
                console.log(data);
                if (data) {
                    res.send(data);
                } else {
                    res.send(false);
                }
            }
            console.log("..logged in on server ");
        });
    });

/**
@api {get} /users/verifyUser/:email/:verificationCode Verify user
@apiName GetVerificationCode
@apiGroup Users
@apiSuccess {boolean} verified Verification Status/redirect to 'resetPassword' page
@apiError {Error} error Error message
@apiDescription verification code to update the verification status,
if user is verified, redirected to resetPassword page
*/

router.get('/verifyUser/:email/:verificationCode', function(req, res, next) {
    var data = { "email": req.params.email, "verificationCode": req.params.verificationCode };
    var toData = { $set: { verified: true } };
    options = {};
    console.log(data);
    usersApi.findAndUpdate(data, toData, options, function(err, data) {
        if (err) {
            console.log("error during verification");
            res.send(err.message);
        } else {
            console.log("verification done");
            //res.send(data);
            res.redirect('/#/resetpassword/' + req.params.email);
        }
    });
});

/**
@api {post} /users/forgotPassword/:emailId Forgot password 
@apiName ResetPasswordLink
@apiGroup Users
@apiSuccess {String} message Verification mail sent to the user's registered email
@apiError {Error} error Error message
@apiDescription Verification mail sent to the user with a link to update the verification status,
if user is verified then user is redirected to resetPassword page.
@apiSuccessExample {String} Success-Response:
verification mail sent.
*/

router.post('/forgotPassword/:emailId', function(req, res, next) {

    var data = { email: req.params.emailId };
    usersApi.find(data, function(err, data) {
        if (err) {
            console.log("error getting verification code");
            res.send(err.message);
        } else {
            console.log(req.params.emailId);
            console.log(data.verificationCode);
            var mail = {
                from: "anand",
                to: req.params.emailId,
                subject: 'password reset',
                text: "to reset your password follow the above reset link",
                'html': "<a href='http:192.168.100.158:3000/verifyuser/" + req.params.emailId + "/" + data.verificationCode + "'>reset password</a>"
            };

            emailServiceProvider.send(mail, function(err, data) {
                if (err) {
                    console.log("error sending verification mail ");
                    console.log(err.message);
                    res.send(err.message);
                } else {
                    console.log('verification mail sent');
                    console.log(data);
                    res.send("verification mail sent");
                }
            });

        }
    });

});

/**
@api {post} /users/resetPassword/:emailId Reset password 
@apiName PostNewPassword
@apiGroup Users
@apiSuccess {json} updateStatus update operation result if record modified.
@apiError {Error} error Error message
@apiSuccessExample {json} Success-Response:
{
  "ok": 1,
  "nModified": 1,
  "n": 1
}
*/

router.post('/resetPassword/:emailId', function(req, res, next) {
    var data = { 'email': req.params.emailId, 'verified': true };
    var newPassword = req.body.newPassword;
    var toData = { $set: { 'password': newPassword, 'verified': false } };

    usersApi.findAndUpdate(data, toData, {}, function(err, data) {
        if (err) {
            console.log("password reset error");
            res.send(err.message);
        } else {
            if (data) {
                console.log("password changed successfully");
                res.send(data);
            } else {
                console.log("you need to visit your verification link");
                res.send(data);
            }

        }
    });
});

/**
@api {get} /users/userInfo/:userId User detail 
@apiName GetUser
@apiGroup Users
@apiSuccess {json} user User information.
@apiError {Error} error Error message
@apiSuccessExample {json} Success-Response:
{
  "verification_code": "56c2aded22ee1b32272e40f7",
  "reset_pass_token": "56c2aded22ee1b32272e40f7",
  "__v": 0,
  "favourites": [
    "56c5c2bbc04a005b215e1d5c",
    "56c6b0a559f0dc4b10ac212f",
    "56c6915e17c602d40a7a0f88"
  ],
  "role": "user",
  "lastName": "yadav",
  "firstName": "sunil",
  "gender": "M",
  "mobile": "8054455553",
  "email": "anand.yadav@daffodilsw.com",
  "username": "sunilyadav"
}
*/

router.get('/userInfo/:userId', function(req, res, next) {
    var query = { _id: req.params.userId };
    var projection = { _id: 0, password: 0, verified: 0, verificationCode: 0, resetPasswordToken: 0 };
    options = {};
    usersApi.find(query, projection, options, function(err, data) {
        if (err) {
            console.log('error finding userinfo' + err);
            res.send(err.message);
        } else {
            if (data) {
                console.log('userinfo is ' + data);
                res.send(data);
            } else {
                res.send(false);
            }
        }
    });
});

/**
@api {put} /users/updateInfo/:userId Update user detail 
@apiName PutUserDetail
@apiGroup Users
@apiSuccess {json} user updated user information.
@apiError {Error} error Error message
@apiSuccessExample {json} Success-Response:
{
  "verification_code": "56c2aded22ee1b32272e40f7",
  "reset_pass_token": "56c2aded22ee1b32272e40f7",
  "__v": 0,
  "favourites": [
    "56c5c2bbc04a005b215e1d5c",
    "56c6b0a559f0dc4b10ac212f",
    "56c6915e17c602d40a7a0f88"
  ],
  "role": "user",
  "lastName": "yadav",
  "firstName": "sunny",
  "gender": "M",
  "mobile": "8054455553",
  "email": "anand.yadav@daffodilsw.com",
  "username": "sunilyadav"
}
*/

router.put('/updateInfo/:userId', function(req, res, next) {
    var query = { _id: req.params.userId };
    var toData = { $set: req.body };
    var options = {};
    var error = {};
    var result = {};

    usersApi.findAndUpdate(query, toData, options, function(err, data) {
        if (err) {
            console.log("error updating info" + err);
            res.send(err);
        } else {
            console.log('info updates result' + data);
            var query = { _id: req.params.userId };
            var projection = { _id: 0, password: 0, verified: 0, verificationCode: 0, resetPasswordToken: 0 };
            var options = {};
            usersApi.find(query, projection, options, function(err, data) {
                if (err) {
                    console.log('error finding userInfo' + err);
                    res.send(false);
                    //error=err;
                } else {
                    console.log('userInfo is ' + data);
                    res.send(data);
                    //result=data;
                }
            });

        }
    });
});

/**
@api {post} /users/changePassword Update user password 
@apiName UpdatePassword
@apiGroup Users
@apiSuccess {Boolean} status updated password status.
@apiError {Error} error Error message
@apiSuccessExample {Boolean} Success-Response:
true
*/

router.post('/changePassword', function(req, res, next) {
    console.log("changing password");
    console.log(req.body);
    var query = { _id: req.body._id, password: req.body.password };
    var toData = { $set: { password: req.body.newPassword } };
    var options = {};
    usersApi.findAndUpdate(query, toData, options, function(err, data) {
        if (data) {
            console.log(data);
            res.send(true);
        } else {
            console.log(err);
            res.send(false);
        }
    });
});

/**
@api {put} /users/favourites/markFav Mark favourite posts
@apiName PutFavouritesMark
@apiGroup Users
@apiSuccess {json} user updated user favourites.
@apiError {Error} error Error message
*/

router.put('/favourites/markFav', function(req, res, next) {
    var query = { '_id': req.body.userId };
    var toData = { $addToSet: { favourites: req.body.postId } };
    var options = {};
    usersApi.findAndUpdate(query, toData, options, function(err, data) {
        if (err) {
            console.log('error updating favourites');
            console.log(err.message);
            res.send(err.message);
        } else {
            if (data) {
                console.log('favourites marked');
                res.send(data);
            } else {
                console.log('favourites could not marked');
                res.send(data);
            }
        }
    });
});

/**
@api {put} /users/favourites/unmarkFav Mark favourite posts
@apiName PutFavouritesUnmark
@apiGroup Users
@apiSuccess {json} user updated user favourites.
@apiError {Error} error Error message
*/

router.put('/favourites/unmarkFav', function(req, res, next) {
    var query = { '_id': req.body.userId };
    var toData = { $set: { $pull: { favourites: { $eq: req.body.postId } } } };
    options = { upsert: true };
    usersApi.findAndUpdate(query, toData, options, function(err, data) {
        if (err) {
            console.log('error updating unmarkFav');
            console.log(err.message);
            res.send(err.message);
        } else {
            if (data) {
                console.log('favourites unmarked');
                console.log(data);
                res.send(data);
            } else {
                console.log('could not unmarked');
                console.log(data);
                res.send(data);
            }
        }
    });
});

/**
@api {get} /users/favourites/:userId Retrieve favourite posts
@apiName GetFavourites
@apiGroup Users
@apiSuccess {json} favourites Array of favourite post.
@apiError {Error} error Error message
*/

router.get('/favourites/:userId', function(req, res, next) {
    console.log("...fav...1");

    var query = { '_id': req.params.userId };
    var projection = { 'favourites': 1, '_id': 0 };
    options = {};
    console.log("...fav...2");
    usersApi.find(query, projection, options, function(err, data) {
        console.log("...fav...3");
        if (err) {
            console.log('error retrieving favourites');
            console.log(err.message);
            res.send(err.message);
        } else {
            console.log('favourites found');
            console.log(data);
            res.send(data);
        }
    });
});

module.exports = router;
