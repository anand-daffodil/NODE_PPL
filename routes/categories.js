var express = require('express');
var router = express.Router();
var categoriesApi = require('../api/categories');

/**
 *@api {get} /categories Request all categories
 *@apiName GetCategories
 *@apiGroup Categories
 *@apiSuccess {JSON} categories Categories as an array of categories object
 *@apiError {error} error error message
 *@apiSuccessExample {json} Success-Response:
 *http 200 ok
 *[
 * {
 *   "_id": "56c30e0588e52e601d9478c2",
 *   "catType": "CATS",
 *   "image": "/uploads/icon_01.png"
 * },
 * {
 *   "_id": "56c30e1e88e52e601d9478c5",
 *   "catType": "OTHERS",
 *   "image": "/uploads/flag.png"
 * }
 *]
 */

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

/**
 *@api {put} /categories/insert Insert a new category
 *@apiName InsertCategory
 *@apiGroup Categories
 *@apiSuccess {JSON} category new created category object
 *@apiError {Error} error error message
 *@apiSuccessExample {json} Success-Response:
 * http 200 ok
 * {
  "__v": 0,
  "catType": "Parrots",
  "image": "Images/parrots",
  "_id": "56fe5db460af7d0f2effefeb"
}
 */

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

/**
 *@api {put} /categories/update/:catId Update specified Category
 *@apiName UpdateCategories
 *@apiGroup Categories
 *@apiSuccess {JSON} category update information on category object
 *@apiError {Error} error error message
 *@apiSuccessExample Success-Response:
 * http 200 ok
 * {
  "ok": 1,
  "nModified": 1,
  "n": 1
}
 */

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

/**
 *@api {put} /categories/delete/:catId Delete specified category
 *@apiName DeleteCategories
 *@apiGroup Categories
 *@apiSuccess {JSON} category deletion information on category object
 *@apiError {Error} error error message
 *@apiSuccessExample Success-Response:
 * http 200 ok
 * {
  "ok": 1,
  "n": 1
}
 */

router.put('/delete/:catId', function(req, res, next) {
    categoriesApi.remove({ '_id': req.params.catId }, function(err, data) {
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
