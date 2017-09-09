var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var questionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  savedDate: {
    type: Date,
    default: Date.now
  }
});

var Question = mongoose.model("Question", questionSchema);

module.exports = Question;