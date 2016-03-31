var mongoose = require('mongoose');
var config = require('../config/config');
mongoose.connect(config.dbPath);

var db = mongoose.connection;
db.on('error', function() { console.log("db server error"); });
db.once('open', function() { console.log("db connected"); });

module.exports = mongoose;
