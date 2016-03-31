var categories = require('../models/categories');

module.exports.find = function(data, projection, options, callback) {
    data = data || {};
    projection = projection || {};
    options = options || {};
    categories.find(data, projection, options, function(err, data) {
        if (err) {
            console.log('error is ' + err.message);
            callback(err, null);
        } else {
            console.log('data is ' + data);
            callback(null, data);
        }
    });
};

module.exports.insert = function(data, callback) {
    data = data || {};
    categories.create(data, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
};

module.exports.update = function(data, projection, options, callback) {
    categories.update(data, projection, options, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
};

module.exports.remove = function(data, callback) {
    categories.remove(data, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
};