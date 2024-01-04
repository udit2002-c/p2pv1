const usersschema = require("./datamodel/usersschema");
const mongoose = require("mongoose");
const mongooseSchema = new mongoose.Schema({ name: String });
const MyModel = mongoose.model("Test", new mongoose.Schema(usersschema));
