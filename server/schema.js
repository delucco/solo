var db = require('./db');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, index: {unique: true } },
  wins: Number,
  loses: Number
});

var User = mongoose.model('User', userSchema);


// userSchema.pre('save', function(next) {
//   var cipher = Promise.promisify(bcrypt.hash);
//   return cipher(this.password, null, null).bind(this)
//     .then(function(hash) {
//       this.password = hash;
//     next();
//   });
// });

// User.prototype.comparePassword = function(attemptedPassword, callback) {
//   bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
//     callback(err, isMatch);
//   });
// };

module.exports = User;

