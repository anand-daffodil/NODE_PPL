var users = require('../models/users');
var mongoose = require('mongoose');

module.exports.insert = function(data, callback) {
    var code = mongoose.Types.ObjectId(); //new ObjectId();
    data.verification_code = code;
    data.reset_pass_token = code;
    data.verified = false;
    if (!data.role) {
        data.role = "user";
    }

    users.create(data, function(err, data) {
        if (err) {
            console.log("error creating new user");
            callback(err, null);
        } else {
            console.log(data + " user created");
            callback(null, true);
        }
    });
};

module.exports.remove = function(data, callback) {
    users.remove(data, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
};


module.exports.find = function(data, projection, options, callback) {
    data = data || {};
    projection = projection || {};
    options = options || {};
    users.find(data, projection, options)
    .populate('favourites')
    .exec(function(err, data) {
            if (err) {
                console.log("error finding users");
                callback(err, null);
            } else {
                console.log(data);
                callback(null, data);
            }

        }) ;
};

module.exports.findOne = function(data, projection, options, callback) {
    data = data || {};
    projection = projection || {};
    options = options || {};
    users.findOne(data, projection, options)
    .populate('favourites')
    .exec(function(err, data) {
            if (err) {
                console.log("error finding users");
                console.log(err.message);
                callback(err, null);
            } else {
                console.log("user found n callback");
                console.log(data);
                callback(null, data);
            }

        }) ;
};

module.exports.findAndUpdate = function(data, to_data, options, callback) {
    data = data || {};
    to_data = to_data || {};
    options = options || {};
    console.log("hellow", data);
    users.update(data, to_data, options, function(err, data) {
        if (err) {
            console.log("err in updation");
            callback(err, null);
        } else {
            console.log("updated");
            console.log(data);
            if (data.nModified) {
                callback(null, true);
            } else {
                callback(null, false);
            }
        }
    });
};
