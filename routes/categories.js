var express = require('express');
var router = express.Router();
var categoriesApi = require('../api/categories');

router.get('/', function(req, res, next) {
    categoriesApi.find({}, {}, {}, function(err, data) {
        if (err) {
            console.log("error is " + err.message);
            res.send(err.message);
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

router.put('/insert', function(req, res, next) {
    var category = req.body;
    categoriesApi.insert(category, function(err, data) {
        if (err) {
            res.send(err.message);
        } else {
            console.log('inserted category');
            console.log(data);
            res.send(data);
        }
    });
});

router.put('/update/:catId', function(req, res, next) {
    var query = { '_id': req.params.catId };
    var toData = { $set: req.body };
    options = {};
    categoriesApi.update(query, toData, options, function(err, data) {
        if (err) {
            console.log('error updating categories');
            console.log(err.messagae);
            res.send(err.message);
        } else {
            console.log('data after updating category');
            console.log(data);
            res.send(data);
        }
    });
});

router.put('/delete/:postId', function(req, res, next) {
    categoriesApi.remove({ '_id': req.params.postId }, function(err, data) {
        if (err) {
            console.log('error deleting category');
            res.send(err.message);
        } else {
            console.log('data after category deletion');
            console.log(data);
            res.send(data);
        }
    });
});

module.exports = router;
