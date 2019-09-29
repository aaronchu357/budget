const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

// userSchema.pre('save', function (next) {
//   const user = this;
//   if (!user.isModified('password')) { return next() };
//   bcrypt.hash(user.password, 10).then((hashedPassword) => {
//     user.password = hashedPassword;
//     next();
//   })
// }, function (err) {
//   next(err)
// })

// userSchema.methods.comparePassword = function (candidatePassword, next) {
//   bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//     if (err) return next(err);
//     next(null, isMatch)
//   })
// }
UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});


module.exports = mongoose.model("user", userSchema);