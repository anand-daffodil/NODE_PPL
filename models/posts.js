var mongoose = require("./dbConnection");

var postSchema = mongoose.Schema({
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }, //fk   
    title: String,
    creatorImage: String,
    creatorName: String,
    createdOn: Date,
    catType: String,
    comments: [{
        creatorId: { type: mongoose.Schema.Types.ObjectId },
        creatorName: String,
        comment: String,
        commentedOn: Date
    }], //[]field -  creatorId, creatorName, comment, commentedOn
    commentcount: Number,
    likeBy: Array, //[]users
    likecount: Number,
    unlikecount: Number,
    image: String,
    flagcount: Number,
    flagBy: Array //[] users

}, { collection: "posts" });

module.exports = mongoose.model("Post", postSchema);
