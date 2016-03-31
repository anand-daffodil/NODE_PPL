var express = require('express');
var router = express.Router();

var postsApi = require('../api/posts');

router.post('/registerPost', function(req, res, next) {
    postsApi.insert(req.body, function(err, data) {
        if (err) {
            console.log("error is " + err.message);
            res.send(err.message);
        } else {
            console.log("data is " + data);
            res.send(data);
        }
    });
});

router.get('/getPosts/:page', function(req, res, next) {
    var query = {};
    var projecion = {};
    var options = { skip: req.params.page * 4, limit: 4 };
    postsApi.find(query, projecion, options, function(err, data) {
        if (err) {
            console.log("error in retrieving posts: " + err);
            res.send(err.message);
        } else {
            if (data) {
                console.log(data);
                res.send(data);
            } else {
                console.log("no record found, data is: " + data);
                res.send(data);
            }
        }
    });
});

router.get('/getPosts/:cat/:page', function(req, res, next) {
    var query = { 'catType': req.params.cat };
    var page = req.params.page;
    postsApi.find(query, {}, page, function(err, data) {
        if (err) {
            console.log("error retrieving filter post is: " + err.message);
            res.send(err.message);
        } else {
            console.log("retrieved filtered posts: " + data);
            res.send(data);
        }
    });
});

router.get('/:userId/:page', function(req, res, next) {
    console.log('user posts being retrieved');
    var query = { 'postedBy': req.params.userId };
    var projection = {};
    var options = { skip: (Number(req.params.page) - 1) * 4, limit: 3 };
    postsApi.find(query, projection, options, function(err, data) {
        if (err) {
            console.log('error retrieving user posts is ' + err);
            res.send(err.message);
        } else {
            if (data) {
                console.log('user posts ');
                res.send(data);
            } else {
                console.log('no user posts found');
                res.send(false);
            }
        }
    });
});

router.get('/getAllPosts/:category/:flaged/:sortBy/:page', function(req, res, next) {
    var count;
    if (req.params.flaged == 1) {
        count = 1;
    } else {
        count = 0;
    }

    console.log(count);
    var query = { catType: req.params.category, flagCount: { $gte: count } };
    var options = { 'skip': req.params.page - 1, 'limit': 10, 'sort': { sortBy: 1 } };
    postsApi.find(query, {}, options, function(err, data) {
        if (err) {
            res.send(err.message);
        } else {
            res.send(data);
        }
    });
});

router.put('/like/:postid', function(req, res, next) {
    data = { _id: req.params.postid };
    toData = { $inc: { 'likeCount': 1 } };
    postsApi.findAndUpdate(data, toData, false, function(err, data) {
        if (err) {
            console.log(err.message);
            res.send(false);
        } else {
            console.log(data);
            if (data.nModified) {
                postsApi.findOne({ '_id': req.params.postid }, { 'likeCount': 1 }, {}, function(err, data) {
                    if (err) {
                        res.send(false);
                    } else {
                        console.log('like count: ' + data + data.likeCount);
                        res.send(data.likeCount);
                    }
                });
            } else {
                res.send(false);
            }

        }
    });
});

router.put('/unlike/:postid', function(req, res, next) {
    data = { _id: req.params.postid };
    toData = { $inc: { 'unlikecount': 1 } };
    postsApi.findAndUpdate(data, toData, false, function(err, data) {
        if (err) {
            console.log(err.message);
            res.send(false);
        } else {
            console.log(data);
            if (data.nModified) {
                postsApi.findOne({ _id: req.params.postid }, { unlikecount: 1 }, {}, function(err, data) {
                    if (err) {
                        res.send(false);
                    } else {
                        res.send(data.unlikecount);
                    }
                });
            } else {
                res.send(false);
            }
        }
    });
});

router.get('/:postid', function(req, res, next) {
    var query = { '_id': req.params.postid };
    var projection = { comments: { $slice: [0, 2] } };
    //var options={sort:{comments.commentedOn:-1}};
    postsApi.findOne(query, projection, {}, function(err, data) {
        if (err) {
            console.log(err.message);
            res.send(false);
        } else {
            if (data) {
                console.log(data);
                res.send(data);
            } else {
                res.send(false);
            }
        }
    });
});

router.put('/:postId', function(req, res, next) {
    var query = { '_id': req.params.postId };
    postsApi.remove(query, function(err, data) {
        if (err) {
            console.log(err.message);
            res.send(false);
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

router.post('/comment', function(req, res, next) {
    var query = { '_id': req.body._id };
    var toData = { $push: { comments: req.body.comment }, $inc: { commentcount: 1 } };

    postsApi.findAndUpdate(query, toData, {}, function(err, data) {
        if (err) {
            console.log('error updating comment');
            res.send(false);
        } else {
            console.log('comment updated');
            var projection = { 'password': 0, comments: { $slice: [0, req.body.page * 2] } };
            //var options={sort:{comments.commentedOn:-1};
            postsApi.findOne(query, projection, {}, function(err, data) {
                if (err) {
                    console.log('error finding post with updated comment');
                    res.send(false);
                } else {
                    if (data) {
                        console.log('post with updated comment found' + data);
                        res.send(data);
                    } else {
                        console.log('no match found');
                        res.send(false);
                    }
                }
            });
        };
    });
});

router.get('/comments/:postId/:page', function(req, res, next) {
    query = { '_id': req.params.postId };
    projection = { comments: { $slice: [(Number(req.params.page) - 1) * 2, 2] } };
    //options={sortBy:{comments.commentedOn:-1}};
    postsApi.findOne(query, projection, {}, function(err, data) {
        if (err) {
            console.log('error retrieving all comments: ' + err);
            res.send(false);
        } else {
            if (data) {
                console.log('data is ' + data);
                res.send(data);

            } else {
                console.log('no comments found');
                res.send(false);
            }
        }
    });
});


module.exports = router;
