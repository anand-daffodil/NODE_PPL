var mongoose = require('./dbConnection');

var catSchema = mongoose.Schema({
    catType: String,
    image: String
}, { collection: 'categories' });

module.exports = mongoose.model('Categories', catSchema);
