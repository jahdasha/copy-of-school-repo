var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  password: {
    type: String,
    trim: true,
    required: true
    validate: [
      //Function takes in the value as an argument
      function(input) {
        //If this returns true, proceed. If not, return an error message.
        return input.length >= 8;
      },
      //Error Message
      'Longstring should be longer.'
    ]
  },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  },
  boolean: Boolean,
  userCreated: {
    type: Date,
    default: Date.now
  }

});

var User = mongoose.model('User', UserSchema);
module.exports = User;
