var Question = require("../models/Question");

module.exports = {

  create: function(req, res) {
    let result = {}
    let entry = new Article(result);
    
    entry.save().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  get: function (req, res) {
    Question.find()
    .then(function(doc) {
      res.json(doc);
      // console.log(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles updating Question
  update: function(req, res) {
    Question.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles deleting Question
  destroy: function(req, res) {
    Question.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
