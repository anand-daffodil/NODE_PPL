var mongoose = require('./dbConnection');

var userSchema = mongoose.Schema({
    username: { type: String, default: null }, // first name +last name
    email: { type: String, default: null },
    mobile: { type: String, default: null },
    gender: { type: String, default: null },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    password: { type: String, default: null },
    verificationCode: { type: String, default: null },
    verified: { type: Boolean, default: false },
    resetPasswordToken: { type: String, default: null },
    role: { type: String, default: "user" }, //user or admin
    favourites: { type: Array }
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);
