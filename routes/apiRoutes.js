var express = require("express");

var questionController = require("../controllers/questionController");

var router = new express.Router();

// Get all article (or optionally a specific quote with an id)
router.get("/question", questionController.get);
// Create a new quote using data passed in req.body
router.post("/question", questionController.create);
// Update an existing quote with a speicified id param, using data in req.body
router.patch("/question/:id", questionController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/question/:id", questionController.destroy);

module.exports = router;
