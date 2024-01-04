// document.js file
const usersschema = require("./datamodel/usersschema");
const mongoose = require("mongoose");

// Directly use the usersschema to create the model
const MyModel = mongoose.model("Test", usersschema);

module.exports = MyModel;
