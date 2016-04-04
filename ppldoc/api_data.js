define({ "api": [
  {
    "type": "put",
    "url": "/categories/delete/:catId",
    "title": "Delete specified category",
    "name": "DeleteCategories",
    "group": "Categories",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "category",
            "description": "<p>deletion information on category object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http 200 ok\n{\n  \"ok\": 1,\n  \"n\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/categories.js",
    "groupTitle": "Categories"
  },
  {
    "type": "get",
    "url": "/categories",
    "title": "Request all categories",
    "name": "GetCategories",
    "group": "Categories",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "categories",
            "description": "<p>Categories as an array of categories object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http 200 ok\n[\n{\n  \"_id\": \"56c30e0588e52e601d9478c2\",\n  \"catType\": \"CATS\",\n  \"image\": \"/uploads/icon_01.png\"\n},\n{\n  \"_id\": \"56c30e1e88e52e601d9478c5\",\n  \"catType\": \"OTHERS\",\n  \"image\": \"/uploads/flag.png\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "error",
            "optional": false,
            "field": "error",
            "description": "<p>error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/categories.js",
    "groupTitle": "Categories"
  },
  {
    "type": "put",
    "url": "/categories/insert",
    "title": "Insert a new category",
    "name": "InsertCategory",
    "group": "Categories",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "category",
            "description": "<p>new created category object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http 200 ok\n{\n  \"__v\": 0,\n  \"catType\": \"Parrots\",\n  \"image\": \"Images/parrots\",\n  \"_id\": \"56fe5db460af7d0f2effefeb\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/categories.js",
    "groupTitle": "Categories"
  },
  {
    "type": "put",
    "url": "/categories/update/:catId",
    "title": "Update specified Category",
    "name": "UpdateCategories",
    "group": "Categories",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "category",
            "description": "<p>update information on category object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http 200 ok\n{\n  \"ok\": 1,\n  \"nModified\": 1,\n  \"n\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/categories.js",
    "groupTitle": "Categories"
  },
  {
    "type": "put",
    "url": "/posts/:postId",
    "title": "Delete single post",
    "name": "DeletePost",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "delResult",
            "description": "<p>Deletion result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"ok\": 1,\n  \"n\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/getPosts/:page",
    "title": "Retrieve all posts by pages",
    "name": "GetAllPosts",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "posts",
            "description": "<p>An array of post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "[\n  {\n    \"_id\": \"56c5c2bbc04a005b215e1d5c\",\n    \"title\": \"sdfdsf\",\n    \"createdOn\": \"2016-02-18T13:10:19.136Z\",\n    \"catType\": \"CATS\",\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": []\n  },\n  {\n    \"_id\": \"56c5b2d72c17e00020aa84cf\",\n    \"postedBy\": {\n      \"_id\": \"56c2aded22ee1b32272e40f8\",\n      \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n      \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n      \"__v\": 0,\n      \"favourites\": [\n        \"56c5c2bbc04a005b215e1d5c\",\n        \"56c6b0a559f0dc4b10ac212f\",\n        \"56c6915e17c602d40a7a0f88\"\n      ],\n      \"role\": \"user\",\n      \"resetPasswordToken\": null,\n      \"verified\": true,\n      \"verificationCode\": null,\n      \"password\": \"b\",\n      \"lastName\": \"yadav\",\n      \"firstName\": \"sunil\",\n      \"gender\": \"M\",\n      \"mobile\": \"8054455553\",\n      \"email\": \"anand.yadav@daffodilsw.com\",\n      \"username\": \"sunilyadav\"\n    },\n    \"title\": \"wdvc\",\n    \"creatorName\": \"anand.yadav@daffodilsw.com\",\n    \"createdOn\": \"2016-02-18T12:02:31.001Z\",\n    \"catType\": \"CATS\",\n    \"image\": \"/uploads/icon_03.png\",\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"likecount\": 10,\n    \"unlikecount\": 4,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": []\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/getPosts/:cat/:page",
    "title": "Retrieve all posts by category and by pages",
    "name": "GetAllPostsByCategory",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "posts",
            "description": "<p>An array of post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "[\n  {\n    \"_id\": \"56c55ac077c532d111d6ac30\",\n    \"postedBy\": {\n      \"_id\": \"56c2aded22ee1b32272e40f8\",\n      \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n      \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n      \"__v\": 0,\n      \"favourites\": [\n        \"56c5c2bbc04a005b215e1d5c\",\n        \"56c6b0a559f0dc4b10ac212f\",\n        \"56c6915e17c602d40a7a0f88\"\n      ],\n      \"role\": \"user\",\n      \"resetPasswordToken\": null,\n      \"verified\": true,\n      \"verificationCode\": null,\n      \"password\": \"b\",\n      \"lastName\": \"yadav\",\n      \"firstName\": \"sunil\",\n      \"gender\": \"M\",\n      \"mobile\": \"8054455553\",\n      \"email\": \"anand.yadav@daffodilsw.com\",\n      \"username\": \"sunilyadav\"\n    },\n    \"title\": \"dfddd\",\n    \"creatorName\": \"anand.yadav@daffodilsw.com\",\n    \"createdOn\": \"2016-02-18T05:46:40.185Z\",\n    \"catType\": \"BIRDS\",\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": []\n  },\n  {\n    \"_id\": \"56c6915e17c602d40a7a0f88\",\n    \"title\": \"dfrdsf\",\n    \"createdOn\": \"2016-02-19T03:51:58.044Z\",\n    \"catType\": \"BIRDS\",\n    \"image\": \"/uploads/feat_img1.png\",\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"likecount\": 3,\n    \"commentcount\": 1,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": [\n      {\n        \"comment\": \"post with userinfo\",\n        \"_id\": \"56cab79fd74e5cb31200a46f\"\n      }\n    ]\n  },\n  {\n    \"_id\": \"56ceb48c997212f72b5bddd3\",\n    \"postedBy\": {\n      \"_id\": \"56c2aded22ee1b32272e40f8\",\n      \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n      \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n      \"__v\": 0,\n      \"favourites\": [\n        \"56c5c2bbc04a005b215e1d5c\",\n        \"56c6b0a559f0dc4b10ac212f\",\n        \"56c6915e17c602d40a7a0f88\"\n      ],\n      \"role\": \"user\",\n      \"resetPasswordToken\": null,\n      \"verified\": true,\n      \"verificationCode\": null,\n      \"password\": \"b\",\n      \"lastName\": \"yadav\",\n      \"firstName\": \"sunil\",\n      \"gender\": \"M\",\n      \"mobile\": \"8054455553\",\n      \"email\": \"anand.yadav@daffodilsw.com\",\n      \"username\": \"sunilyadav\"\n    },\n    \"title\": \"fdgdsdsgs\",\n    \"creatorName\": \"anand.yadav@daffodilsw.com\",\n    \"createdOn\": \"2016-02-25T08:00:12.272Z\",\n    \"catType\": \"BIRDS\",\n    \"image\": \"/uploads/serch.png\",\n    \"flagcount\": 0,\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": []\n  },\n  {\n    \"_id\": \"56c6c1e27e06d86112ac358f\",\n    \"title\": \"rt\",\n    \"createdOn\": \"2016-02-19T07:18:58.066Z\",\n    \"catType\": \"BIRDS\",\n    \"image\": \"/uploads/icon_03.png\",\n    \"flagcount\": 0,\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"commentcount\": 3,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": [\n      {\n        \"comment\": \"dsfsdfsdfdf///////////\",\n        \"commentedOn\": \"2016-02-22T10:37:19.404Z\",\n        \"_id\": \"56cae4df6335aec5197a6317\"\n      },\n      {\n        \"comment\": \"dsfsdfsdfdf///////////d\",\n        \"commentedOn\": \"2016-02-22T10:37:25.836Z\",\n        \"_id\": \"56cae4e56335aec5197a6318\"\n      },\n      {\n        \"comment\": \"dsfsdfsdfdf///////////d3\",\n        \"commentedOn\": \"2016-02-22T10:37:29.716Z\",\n        \"_id\": \"56cae4e96335aec5197a6319\"\n      }\n    ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/comments/:postId/:page",
    "title": "Retrieves all comments of a specific post",
    "name": "GetComments",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "comments",
            "description": "<p>post with updated comments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"comment\": \"dsfdsf\",\n        \"commentedOn\": \"2016-02-24T04:40:38.693Z\",\n        \"_id\": \"56cd34460f7b2e630aa769c2\"\n    },\n    {\n        \"comment\": \"dsfdsf12\",\n        \"commentedOn\": \"2016-02-24T04:40:43.948Z\",\n        \"_id\": \"56cd344b0f7b2e630aa769c3\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/getAllPosts/:category/:flaged/:sortBy/:page",
    "title": "Retrieves all filtered posts by page",
    "name": "GetFilteredPosts",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "posts",
            "description": "<p>Array of post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"_id\": \"56c55ac077c532d111d6ac30\",\n    \"postedBy\": {\n      \"_id\": \"56c2aded22ee1b32272e40f8\",\n      \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n      \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n      \"__v\": 0,\n      \"favourites\": [\n        \"56c5c2bbc04a005b215e1d5c\",\n        \"56c6b0a559f0dc4b10ac212f\",\n        \"56c6915e17c602d40a7a0f88\"\n      ],\n      \"role\": \"user\",\n      \"resetPasswordToken\": null,\n      \"verified\": true,\n      \"verificationCode\": null,\n      \"password\": \"b\",\n      \"lastName\": \"yadav\",\n      \"firstName\": \"sunil\",\n      \"gender\": \"M\",\n      \"mobile\": \"8054455553\",\n      \"email\": \"anand.yadav@daffodilsw.com\",\n      \"username\": \"sunilyadav\"\n    },\n    \"title\": \"dfddd\",\n    \"creatorName\": \"anand.yadav@daffodilsw.com\",\n    \"createdOn\": \"2016-02-18T05:46:40.185Z\",\n    \"catType\": \"BIRDS\",\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": []\n  },\n  {\n    \"_id\": \"56c55acb77c532d111d6ac31\",\n    \"postedBy\": {\n      \"_id\": \"56c2aded22ee1b32272e40f8\",\n      \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n      \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n      \"__v\": 0,\n      \"favourites\": [\n        \"56c5c2bbc04a005b215e1d5c\",\n        \"56c6b0a559f0dc4b10ac212f\",\n        \"56c6915e17c602d40a7a0f88\"\n      ],\n      \"role\": \"user\",\n      \"resetPasswordToken\": null,\n      \"verified\": true,\n      \"verificationCode\": null,\n      \"password\": \"b\",\n      \"lastName\": \"yadav\",\n      \"firstName\": \"sunil\",\n      \"gender\": \"M\",\n      \"mobile\": \"8054455553\",\n      \"email\": \"anand.yadav@daffodilsw.com\",\n      \"username\": \"sunilyadav\"\n    },\n    \"title\": \"ffff\",\n    \"creatorName\": \"anand.yadav@daffodilsw.com\",\n    \"createdOn\": \"2016-02-18T05:46:51.841Z\",\n    \"catType\": \"OTHERS\",\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": []\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/:postId",
    "title": "Retrieves single post",
    "name": "GetPost",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "post",
            "description": "<p>Post details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"_id\": \"56cffbbfd0d6c94010456475\",\n    \"postedBy\": {\n      \"_id\": \"56c2aded22ee1b32272e40f8\",\n      \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n      \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n      \"__v\": 0,\n      \"favourites\": [\n        \"56c5c2bbc04a005b215e1d5c\",\n        \"56c6b0a559f0dc4b10ac212f\",\n        \"56c6915e17c602d40a7a0f88\"\n      ],\n      \"role\": \"user\",\n      \"resetPasswordToken\": null,\n      \"verified\": true,\n      \"verificationCode\": null,\n      \"password\": \"b\",\n      \"lastName\": \"yadav\",\n      \"firstName\": \"sunil\",\n      \"gender\": \"M\",\n      \"mobile\": \"8054455553\",\n      \"email\": \"anand.yadav@daffodilsw.com\",\n      \"username\": \"sunilyadav\"\n    },\n    \"title\": \"mark favourite\",\n    \"creatorName\": \"anand.yadav@daffodilsw.com\",\n    \"createdOn\": \"2016-02-26T07:16:15.203Z\",\n    \"catType\": \"CATS\",\n    \"image\": \"/uploads/feat_img1.png\",\n    \"flagcount\": 0,\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"likecount\": 1,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": []\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/:userId/:page",
    "title": "Retrieves user specific posts by page",
    "name": "GetUserPost",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "posts",
            "description": "<p>Array of post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"_id\": \"56c55ac077c532d111d6ac30\",\n    \"postedBy\": {\n      \"_id\": \"56c2aded22ee1b32272e40f8\",\n      \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n      \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n      \"__v\": 0,\n      \"favourites\": [\n        \"56c5c2bbc04a005b215e1d5c\",\n        \"56c6b0a559f0dc4b10ac212f\",\n        \"56c6915e17c602d40a7a0f88\"\n      ],\n      \"role\": \"user\",\n      \"resetPasswordToken\": null,\n      \"verified\": true,\n      \"verificationCode\": null,\n      \"password\": \"b\",\n      \"lastName\": \"yadav\",\n      \"firstName\": \"sunil\",\n      \"gender\": \"M\",\n      \"mobile\": \"8054455553\",\n      \"email\": \"anand.yadav@daffodilsw.com\",\n      \"username\": \"sunilyadav\"\n    },\n    \"title\": \"dfddd\",\n    \"creatorName\": \"anand.yadav@daffodilsw.com\",\n    \"createdOn\": \"2016-02-18T05:46:40.185Z\",\n    \"catType\": \"BIRDS\",\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": []\n  },\n  {\n    \"_id\": \"56c55acb77c532d111d6ac31\",\n    \"postedBy\": {\n      \"_id\": \"56c2aded22ee1b32272e40f8\",\n      \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n      \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n      \"__v\": 0,\n      \"favourites\": [\n        \"56c5c2bbc04a005b215e1d5c\",\n        \"56c6b0a559f0dc4b10ac212f\",\n        \"56c6915e17c602d40a7a0f88\"\n      ],\n      \"role\": \"user\",\n      \"resetPasswordToken\": null,\n      \"verified\": true,\n      \"verificationCode\": null,\n      \"password\": \"b\",\n      \"lastName\": \"yadav\",\n      \"firstName\": \"sunil\",\n      \"gender\": \"M\",\n      \"mobile\": \"8054455553\",\n      \"email\": \"anand.yadav@daffodilsw.com\",\n      \"username\": \"sunilyadav\"\n    },\n    \"title\": \"ffff\",\n    \"creatorName\": \"anand.yadav@daffodilsw.com\",\n    \"createdOn\": \"2016-02-18T05:46:51.841Z\",\n    \"catType\": \"OTHERS\",\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": []\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/posts/registerPost",
    "title": "Insert a new post",
    "name": "InsertPost",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "post",
            "description": "<p>new created post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"__v\": 0,\n  \"title\": \"Best ever\",\n  \"creatorImage\": \"path\",\n  \"creatorName\": \"daffodilsw\",\n  \"catType\": \"birds\",\n  \"image\": \"Images/parrots/p1\",\n  \"_id\": \"56ff48aa21bfa16912f6b96b\",\n  \"flagBy\": [],\n  \"likeBy\": [],\n  \"comments\": []\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/posts/comment",
    "title": "",
    "name": "PostComment",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "post",
            "description": "<p>post withe updated comments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"_id\": \"56cffbbfd0d6c94010456475\",\n    \"postedBy\": {\n      \"_id\": \"56c2aded22ee1b32272e40f8\",\n      \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n      \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n      \"__v\": 0,\n      \"favourites\": [\n        \"56c5c2bbc04a005b215e1d5c\",\n        \"56c6b0a559f0dc4b10ac212f\",\n        \"56c6915e17c602d40a7a0f88\"\n      ],\n      \"role\": \"user\",\n      \"resetPasswordToken\": null,\n      \"verified\": true,\n      \"verificationCode\": null,\n      \"password\": \"b\",\n      \"lastName\": \"yadav\",\n      \"firstName\": \"sunil\",\n      \"gender\": \"M\",\n      \"mobile\": \"8054455553\",\n      \"email\": \"anand.yadav@daffodilsw.com\",\n      \"username\": \"sunilyadav\"\n    },\n    \"title\": \"mark favourite\",\n    \"creatorName\": \"anand.yadav@daffodilsw.com\",\n    \"createdOn\": \"2016-02-26T07:16:15.203Z\",\n    \"catType\": \"CATS\",\n    \"image\": \"/uploads/feat_img1.png\",\n    \"flagcount\": 0,\n    \"flagby\": [],\n    \"likeby\": [],\n    \"__v\": 0,\n    \"likecount\": 1,\n    \"flagBy\": [],\n    \"likeBy\": [],\n    \"comments\": [\n        {\n            \"comment\" : \"dsfdsf\",\n            \"commentedOn\" : ISODate(\"2016-02-24T04:40:38.693Z\"),\n            \"_id\" : ObjectId(\"56cd34460f7b2e630aa769c2\")\n        },\n        {\n            \"comment\" : \"dsfdsf12\",\n            \"commentedOn\" : ISODate(\"2016-02-24T04:40:43.948Z\"),\n            \"_id\" : ObjectId(\"56cd344b0f7b2e630aa769c3\")\n        }\n    ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "put",
    "url": "/posts/like/:postId",
    "title": "Increment like count",
    "name": "PutLikes",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "likeCount",
            "description": "<p>count of likes after increment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "5",
          "type": "Number"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "put",
    "url": "/posts/unlike/:postId",
    "title": "Increment unlike count",
    "name": "PutUnLikes",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "unlikeCount",
            "description": "<p>count of unlikes after increment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "3",
          "type": "Number"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/users/favourites/:userId",
    "title": "Retrieve favourite posts",
    "name": "GetFavourites",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "favourites",
            "description": "<p>Array of favourite post.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/userInfo/:userId",
    "title": "User detail",
    "name": "GetUser",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>User information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n  \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n  \"__v\": 0,\n  \"favourites\": [\n    \"56c5c2bbc04a005b215e1d5c\",\n    \"56c6b0a559f0dc4b10ac212f\",\n    \"56c6915e17c602d40a7a0f88\"\n  ],\n  \"role\": \"user\",\n  \"lastName\": \"yadav\",\n  \"firstName\": \"sunil\",\n  \"gender\": \"M\",\n  \"mobile\": \"8054455553\",\n  \"email\": \"anand.yadav@daffodilsw.com\",\n  \"username\": \"sunilyadav\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/verifyUser/:email/:verificationCode",
    "title": "Verify user",
    "name": "GetVerificationCode",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "verified",
            "description": "<p>Verification Status/redirect to 'resetPassword' page</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "description": "<p>verification code to update the verification status, if user is verified, redirected to resetPassword page</p>",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/resetPassword/:emailId",
    "title": "Reset password",
    "name": "PostNewPassword",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "updateStatus",
            "description": "<p>update operation result if record modified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"ok\": 1,\n  \"nModified\": 1,\n  \"n\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/favourites/markFav",
    "title": "Mark favourite posts",
    "name": "PutFavouritesMark",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>updated user favourites.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/favourites/unmarkFav",
    "title": "Mark favourite posts",
    "name": "PutFavouritesUnmark",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>updated user favourites.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/updateInfo/:userId",
    "title": "Update user detail",
    "name": "PutUserDetail",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>updated user information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"verification_code\": \"56c2aded22ee1b32272e40f7\",\n  \"reset_pass_token\": \"56c2aded22ee1b32272e40f7\",\n  \"__v\": 0,\n  \"favourites\": [\n    \"56c5c2bbc04a005b215e1d5c\",\n    \"56c6b0a559f0dc4b10ac212f\",\n    \"56c6915e17c602d40a7a0f88\"\n  ],\n  \"role\": \"user\",\n  \"lastName\": \"yadav\",\n  \"firstName\": \"sunny\",\n  \"gender\": \"M\",\n  \"mobile\": \"8054455553\",\n  \"email\": \"anand.yadav@daffodilsw.com\",\n  \"username\": \"sunilyadav\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Register new user",
    "name": "RegisterUser",
    "group": "Users",
    "description": "<p>After successful registration send mail to the user</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>User information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "Boolean"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/forgotPassword/:emailId",
    "title": "Forgot password",
    "name": "ResetPasswordLink",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Verification mail sent to the user's registered email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "verification mail sent.",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "description": "<p>Verification mail sent to the user with a link to update the verification status, if user is verified then user is redirected to resetPassword page.</p>",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/changePassword",
    "title": "Update user password",
    "name": "UpdatePassword",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>updated user information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "Boolean"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Authenticate user with passport",
    "name": "UserLogin",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>User information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"56c2aded22ee1b32272e40f8\",\n  \"email\": \"anand.yadav@daffodilsw.com\",\n  \"username\": \"sunilyadav\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
