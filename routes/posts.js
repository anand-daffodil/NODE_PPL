var express = require('express');
var router = express.Router();
var postsApi = require('../api/posts');

/**
@api {post} /posts/ Insert a new post
@apiName InsertPost
@apiGroup Posts
@apiSuccess {JSON} post new created post
@apiError {Error} error error message
@apiSuccessExample {JSON} Success-Response:
{
  "__v": 0,
  "title": "Best ever",
  "creatorImage": "path",
  "creatorName": "daffodilsw",
  "catType": "birds",
  "image": "Images/parrots/p1",
  "_id": "56ff48aa21bfa16912f6b96b",
  "flagBy": [],
  "likeBy": [],
  "comments": []
}
*/

router.post('/', function(req, res, next) {
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

/**
@api {get} /posts?page=page_no Retrieve all posts by pages
@apiName GetAllPosts
@apiGroup Posts
@apiSuccess {json} posts An array of post
@apiError {Error} error error message
@apiSuccessExample {json} Success-Response
[
  {
    "_id": "56c5c2bbc04a005b215e1d5c",
    "title": "sdfdsf",
    "createdOn": "2016-02-18T13:10:19.136Z",
    "catType": "CATS",
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "flagBy": [],
    "likeBy": [],
    "comments": []
  },
  {
    "_id": "56c5b2d72c17e00020aa84cf",
    "postedBy": {
      "_id": "56c2aded22ee1b32272e40f8",
      "verification_code": "56c2aded22ee1b32272e40f7",
      "reset_pass_token": "56c2aded22ee1b32272e40f7",
      "__v": 0,
      "favourites": [
        "56c5c2bbc04a005b215e1d5c",
        "56c6b0a559f0dc4b10ac212f",
        "56c6915e17c602d40a7a0f88"
      ],
      "role": "user",
      "resetPasswordToken": null,
      "verified": true,
      "verificationCode": null,
      "password": "b",
      "lastName": "yadav",
      "firstName": "sunil",
      "gender": "M",
      "mobile": "8054455553",
      "email": "anand.yadav@daffodilsw.com",
      "username": "sunilyadav"
    },
    "title": "wdvc",
    "creatorName": "anand.yadav@daffodilsw.com",
    "createdOn": "2016-02-18T12:02:31.001Z",
    "catType": "CATS",
    "image": "/uploads/icon_03.png",
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "likecount": 10,
    "unlikecount": 4,
    "flagBy": [],
    "likeBy": [],
    "comments": []
  }
]
*/

router.get('/', function(req, res, next) {
    var query = {};
    var projecion = {};
    var options = { skip: req.query.page * 4, limit: 4 };
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

/**
@api {get} /posts/bycategory?cat=category&page=page_no Retrieve all posts by category and by pages
@apiName GetAllPostsByCategory
@apiGroup Posts
@apiSuccess {json} posts An array of post
@apiError {Error} error error message
@apiSuccessExample {json} Success-Response
[
  {
    "_id": "56c55ac077c532d111d6ac30",
    "postedBy": {
      "_id": "56c2aded22ee1b32272e40f8",
      "verification_code": "56c2aded22ee1b32272e40f7",
      "reset_pass_token": "56c2aded22ee1b32272e40f7",
      "__v": 0,
      "favourites": [
        "56c5c2bbc04a005b215e1d5c",
        "56c6b0a559f0dc4b10ac212f",
        "56c6915e17c602d40a7a0f88"
      ],
      "role": "user",
      "resetPasswordToken": null,
      "verified": true,
      "verificationCode": null,
      "password": "b",
      "lastName": "yadav",
      "firstName": "sunil",
      "gender": "M",
      "mobile": "8054455553",
      "email": "anand.yadav@daffodilsw.com",
      "username": "sunilyadav"
    },
    "title": "dfddd",
    "creatorName": "anand.yadav@daffodilsw.com",
    "createdOn": "2016-02-18T05:46:40.185Z",
    "catType": "BIRDS",
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "flagBy": [],
    "likeBy": [],
    "comments": []
  },
  {
    "_id": "56c6915e17c602d40a7a0f88",
    "title": "dfrdsf",
    "createdOn": "2016-02-19T03:51:58.044Z",
    "catType": "BIRDS",
    "image": "/uploads/feat_img1.png",
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "likecount": 3,
    "commentcount": 1,
    "flagBy": [],
    "likeBy": [],
    "comments": [
      {
        "comment": "post with userinfo",
        "_id": "56cab79fd74e5cb31200a46f"
      }
    ]
  },
  {
    "_id": "56ceb48c997212f72b5bddd3",
    "postedBy": {
      "_id": "56c2aded22ee1b32272e40f8",
      "verification_code": "56c2aded22ee1b32272e40f7",
      "reset_pass_token": "56c2aded22ee1b32272e40f7",
      "__v": 0,
      "favourites": [
        "56c5c2bbc04a005b215e1d5c",
        "56c6b0a559f0dc4b10ac212f",
        "56c6915e17c602d40a7a0f88"
      ],
      "role": "user",
      "resetPasswordToken": null,
      "verified": true,
      "verificationCode": null,
      "password": "b",
      "lastName": "yadav",
      "firstName": "sunil",
      "gender": "M",
      "mobile": "8054455553",
      "email": "anand.yadav@daffodilsw.com",
      "username": "sunilyadav"
    },
    "title": "fdgdsdsgs",
    "creatorName": "anand.yadav@daffodilsw.com",
    "createdOn": "2016-02-25T08:00:12.272Z",
    "catType": "BIRDS",
    "image": "/uploads/serch.png",
    "flagcount": 0,
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "flagBy": [],
    "likeBy": [],
    "comments": []
  },
  {
    "_id": "56c6c1e27e06d86112ac358f",
    "title": "rt",
    "createdOn": "2016-02-19T07:18:58.066Z",
    "catType": "BIRDS",
    "image": "/uploads/icon_03.png",
    "flagcount": 0,
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "commentcount": 3,
    "flagBy": [],
    "likeBy": [],
    "comments": [
      {
        "comment": "dsfsdfsdfdf///////////",
        "commentedOn": "2016-02-22T10:37:19.404Z",
        "_id": "56cae4df6335aec5197a6317"
      },
      {
        "comment": "dsfsdfsdfdf///////////d",
        "commentedOn": "2016-02-22T10:37:25.836Z",
        "_id": "56cae4e56335aec5197a6318"
      },
      {
        "comment": "dsfsdfsdfdf///////////d3",
        "commentedOn": "2016-02-22T10:37:29.716Z",
        "_id": "56cae4e96335aec5197a6319"
      }
    ]
  }
]
*/

router.get('/bycategory', function(req, res, next) {
    var query = { 'catType': req.query.cat };
    var page = req.query.page;
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

/**
@api {get} /posts/user/:userId?page=page_no Retrieves user specific posts by page
@apiName GetUserPost
@apiGroup Posts
@apiSuccess {json} posts Array of post
@apiError {Error} error Error message
@apiSuccessExample {json} Success-Response:
[
  {
    "_id": "56c55ac077c532d111d6ac30",
    "postedBy": {
      "_id": "56c2aded22ee1b32272e40f8",
      "verification_code": "56c2aded22ee1b32272e40f7",
      "reset_pass_token": "56c2aded22ee1b32272e40f7",
      "__v": 0,
      "favourites": [
        "56c5c2bbc04a005b215e1d5c",
        "56c6b0a559f0dc4b10ac212f",
        "56c6915e17c602d40a7a0f88"
      ],
      "role": "user",
      "resetPasswordToken": null,
      "verified": true,
      "verificationCode": null,
      "password": "b",
      "lastName": "yadav",
      "firstName": "sunil",
      "gender": "M",
      "mobile": "8054455553",
      "email": "anand.yadav@daffodilsw.com",
      "username": "sunilyadav"
    },
    "title": "dfddd",
    "creatorName": "anand.yadav@daffodilsw.com",
    "createdOn": "2016-02-18T05:46:40.185Z",
    "catType": "BIRDS",
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "flagBy": [],
    "likeBy": [],
    "comments": []
  },
  {
    "_id": "56c55acb77c532d111d6ac31",
    "postedBy": {
      "_id": "56c2aded22ee1b32272e40f8",
      "verification_code": "56c2aded22ee1b32272e40f7",
      "reset_pass_token": "56c2aded22ee1b32272e40f7",
      "__v": 0,
      "favourites": [
        "56c5c2bbc04a005b215e1d5c",
        "56c6b0a559f0dc4b10ac212f",
        "56c6915e17c602d40a7a0f88"
      ],
      "role": "user",
      "resetPasswordToken": null,
      "verified": true,
      "verificationCode": null,
      "password": "b",
      "lastName": "yadav",
      "firstName": "sunil",
      "gender": "M",
      "mobile": "8054455553",
      "email": "anand.yadav@daffodilsw.com",
      "username": "sunilyadav"
    },
    "title": "ffff",
    "creatorName": "anand.yadav@daffodilsw.com",
    "createdOn": "2016-02-18T05:46:51.841Z",
    "catType": "OTHERS",
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "flagBy": [],
    "likeBy": [],
    "comments": []
  }
]
*/

router.get('/user/:userId', function(req, res, next) {
    console.log('user posts being retrieved');
    var query = { 'postedBy': req.params.userId };
    var projection = {};
    var options = { skip: (Number(req.query.page) - 1) * 4, limit: 3 };
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

/**
@api {get} /posts/filtered?category=cat&flaged=true&sortBy=field&page=page_no Retrieves all filtered posts by page
@apiName GetFilteredPosts
@apiGroup Posts
@apiSuccess {json} posts Array of post
@apiError {Error} error Error message
@apiSuccessExample {json} Success-Response:
[
  {
    "_id": "56c55ac077c532d111d6ac30",
    "postedBy": {
      "_id": "56c2aded22ee1b32272e40f8",
      "verification_code": "56c2aded22ee1b32272e40f7",
      "reset_pass_token": "56c2aded22ee1b32272e40f7",
      "__v": 0,
      "favourites": [
        "56c5c2bbc04a005b215e1d5c",
        "56c6b0a559f0dc4b10ac212f",
        "56c6915e17c602d40a7a0f88"
      ],
      "role": "user",
      "resetPasswordToken": null,
      "verified": true,
      "verificationCode": null,
      "password": "b",
      "lastName": "yadav",
      "firstName": "sunil",
      "gender": "M",
      "mobile": "8054455553",
      "email": "anand.yadav@daffodilsw.com",
      "username": "sunilyadav"
    },
    "title": "dfddd",
    "creatorName": "anand.yadav@daffodilsw.com",
    "createdOn": "2016-02-18T05:46:40.185Z",
    "catType": "BIRDS",
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "flagBy": [],
    "likeBy": [],
    "comments": []
  },
  {
    "_id": "56c55acb77c532d111d6ac31",
    "postedBy": {
      "_id": "56c2aded22ee1b32272e40f8",
      "verification_code": "56c2aded22ee1b32272e40f7",
      "reset_pass_token": "56c2aded22ee1b32272e40f7",
      "__v": 0,
      "favourites": [
        "56c5c2bbc04a005b215e1d5c",
        "56c6b0a559f0dc4b10ac212f",
        "56c6915e17c602d40a7a0f88"
      ],
      "role": "user",
      "resetPasswordToken": null,
      "verified": true,
      "verificationCode": null,
      "password": "b",
      "lastName": "yadav",
      "firstName": "sunil",
      "gender": "M",
      "mobile": "8054455553",
      "email": "anand.yadav@daffodilsw.com",
      "username": "sunilyadav"
    },
    "title": "ffff",
    "creatorName": "anand.yadav@daffodilsw.com",
    "createdOn": "2016-02-18T05:46:51.841Z",
    "catType": "OTHERS",
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "flagBy": [],
    "likeBy": [],
    "comments": []
  }
]
*/

router.get('/filtered', function(req, res, next) {
    var count;
    if (req.query.flaged == 1) {
        count = 1;
    } else {
        count = 0;
    }

    console.log(count);
    var query = { catType: req.query.category, flagCount: { $gte: count } };
    var options = { 'skip': req.query.page - 1, 'limit': 10, 'sort': { sortBy: 1 } };
    postsApi.find(query, {}, options, function(err, data) {
        if (err) {
            res.send(err.message);
        } else {
            res.send(data);
        }
    });
});

/**
@api {put} /posts/:postId/likes Increment like count
@apiName PutLikes
@apiGroup Posts
@apiSuccess {Number} likeCount count of likes after increment
@apiError {Error} error Error message
@apiSuccessExample {Number} Success-Response:
5
*/

router.put('/:postId/likes', function(req, res, next) {
    data = { _id: req.params.postId };
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

/**
@api {put} /posts/:postId/unlikes Increment unlike count
@apiName PutUnLikes
@apiGroup Posts
@apiSuccess {Number} unlikeCount count of unlikes after increment
@apiError {Error} error Error message
@apiSuccessExample {Number} Success-Response:
3
*/

router.put('/:postId/unlikes', function(req, res, next) {
    data = { _id: req.params.postId };
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
/**
@api {get} /posts/:postId Retrieves single post
@apiName GetPost
@apiGroup Posts
@apiSuccess {json} post Post details
@apiError {Error} error Error message
@apiSuccessExample {json} Success-Response:
[
  {
    "_id": "56cffbbfd0d6c94010456475",
    "postedBy": {
      "_id": "56c2aded22ee1b32272e40f8",
      "verification_code": "56c2aded22ee1b32272e40f7",
      "reset_pass_token": "56c2aded22ee1b32272e40f7",
      "__v": 0,
      "favourites": [
        "56c5c2bbc04a005b215e1d5c",
        "56c6b0a559f0dc4b10ac212f",
        "56c6915e17c602d40a7a0f88"
      ],
      "role": "user",
      "resetPasswordToken": null,
      "verified": true,
      "verificationCode": null,
      "password": "b",
      "lastName": "yadav",
      "firstName": "sunil",
      "gender": "M",
      "mobile": "8054455553",
      "email": "anand.yadav@daffodilsw.com",
      "username": "sunilyadav"
    },
    "title": "mark favourite",
    "creatorName": "anand.yadav@daffodilsw.com",
    "createdOn": "2016-02-26T07:16:15.203Z",
    "catType": "CATS",
    "image": "/uploads/feat_img1.png",
    "flagcount": 0,
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "likecount": 1,
    "flagBy": [],
    "likeBy": [],
    "comments": []
  }
]
*/
router.get('/:postId', function(req, res, next) {
    var query = { '_id': req.params.postId };
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

/**
@api {delete} /posts/:postId Delete single post
@apiName DeletePost
@apiGroup Posts
@apiSuccess {json} delResult Deletion result
@apiError {Error} error Error message
@apiSuccessExample {json} Success-Response:
{
  "ok": 1,
  "n": 1
}
*/

router.delete('/:postId', function(req, res, next) {
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

/**
@api {post} /posts/:postId/comments
@apiName PostComment
@apiGroup Posts
@apiSuccess {json} post post withe updated comments
@apiError {Error} error Error message
@apiSuccessExample {json} Success-Response:
[
  {
    "_id": "56cffbbfd0d6c94010456475",
    "postedBy": {
      "_id": "56c2aded22ee1b32272e40f8",
      "verification_code": "56c2aded22ee1b32272e40f7",
      "reset_pass_token": "56c2aded22ee1b32272e40f7",
      "__v": 0,
      "favourites": [
        "56c5c2bbc04a005b215e1d5c",
        "56c6b0a559f0dc4b10ac212f",
        "56c6915e17c602d40a7a0f88"
      ],
      "role": "user",
      "resetPasswordToken": null,
      "verified": true,
      "verificationCode": null,
      "password": "b",
      "lastName": "yadav",
      "firstName": "sunil",
      "gender": "M",
      "mobile": "8054455553",
      "email": "anand.yadav@daffodilsw.com",
      "username": "sunilyadav"
    },
    "title": "mark favourite",
    "creatorName": "anand.yadav@daffodilsw.com",
    "createdOn": "2016-02-26T07:16:15.203Z",
    "catType": "CATS",
    "image": "/uploads/feat_img1.png",
    "flagcount": 0,
    "flagby": [],
    "likeby": [],
    "__v": 0,
    "likecount": 1,
    "flagBy": [],
    "likeBy": [],
    "comments": [
        {
            "comment" : "dsfdsf",
            "commentedOn" : ISODate("2016-02-24T04:40:38.693Z"),
            "_id" : ObjectId("56cd34460f7b2e630aa769c2")
        },
        {
            "comment" : "dsfdsf12",
            "commentedOn" : ISODate("2016-02-24T04:40:43.948Z"),
            "_id" : ObjectId("56cd344b0f7b2e630aa769c3")
        }
    ]
  }
] 
*/

router.post('/:postId/comments', function(req, res, next) {
    var query = { '_id': req.params.postId };
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

/**
@api {get} /posts/:postId/comments?page=page_no Retrieves all comments of a specific post
@apiName GetComments
@apiGroup Posts
@apiSuccess {json} comments post with updated comments
@apiError {Error} error Error message
@apiSuccessExample {json} Success-Response:
[
    {
        "comment": "dsfdsf",
        "commentedOn": "2016-02-24T04:40:38.693Z",
        "_id": "56cd34460f7b2e630aa769c2"
    },
    {
        "comment": "dsfdsf12",
        "commentedOn": "2016-02-24T04:40:43.948Z",
        "_id": "56cd344b0f7b2e630aa769c3"
    }
]
*/

router.get('/:postId/comments', function(req, res, next) {
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
