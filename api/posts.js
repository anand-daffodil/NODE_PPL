var posts = require('../models/posts');

module.exports.insert = function(data, callback) {
    posts.create(data, function(err, data) {
        if (err) {
            console.log("error creating posts");
            console.log(err.message);
            callback(err, null);
        } else {
            console.log("created successfully");
            console.log(data);
            callback(null, data);
        }
    });
};

module.exports.findOne = function(query, projection, options, callback) {

    query = query || {};
    projection = projection || {};
    options = options || {};
    posts.find(query, projection, options)
        .populate('postedBy')
        .exec(function(err, data) {
            if (err) {
                console.log("error finding posts");
                console.log(err.message);
                callback(err, null);
            } else {
                console.log("post found");
                console.log(data);
                callback(null, data);
            }

        });
};

module.exports.find = function(query, projection, options, callback) {

    query = query || {};
    projection = projection || {};
    options = options || {};
    posts.find(query, projection, options)
        .populate('postedBy')
        .exec(function(err, data) {
            if (err) {
                console.log("error finding posts");
                console.log(err.message);
                callback(err, null);
            } else {
                console.log("post found");
                console.log(data);
                callback(null, data);
            }

        });
};

module.exports.findAndUpdate = function(data, toData, options, callback) {
    data = data || {};
    toData = toData || {};
    options = options || {};
    posts.update(data, toData, options, function(err, data) {
        if (err) {
            console.log("error updating posts");
            console.log(err.message);
            callback(err, null);
        } else {
            console.log("data updated successfully");
            console.log(data);
            callback(null, data);
        }
    });
};

module.exports.remove = function(data, callback) {
    data = data || {};
    posts.remove(data, function(err, data) {
        if (err) {
            console.log("error deleting posts");
            console.log(err.message);
            callback(err, null);
        } else {
            console.log("posts deletion done");
            console.log(data);
            callback(null, data);
        }
    });
};
