const usersschema = require("./datamodel/usersschema");
const mongoose = require("mongoose");
const mongooseSchema = new mongoose.Schema({ name: String });
const MyModel = mongoose.model("Test", new Schema(usersschema));

// module.exports = mongoose.model("MyModel", usersschema);

