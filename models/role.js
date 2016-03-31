var mongoose = require("./dbConnection");

var roleSchema = mongoose.Schema({
    name: String,
    actions: Array //  []  permissions

}, { collection: "role" });

module.exports = mongoose.model("Role", roleSchema);
