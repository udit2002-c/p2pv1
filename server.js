const express = require("express");
const mongoose = require("mongoose");
const middleware = require("./middleware");
const routes = require("./routes");
// const MyModel = require("./documents");

const app = express();
const PORT = 5000;

mongoose
 .connect(
    "mongodb+srv://yashdivyapatna:0pxei1Hi9JK7azk3@cluster0.q30je9a.mongodb.net/?retryWrites=true&w=majority"
 )
 .then(() => {
    console.log("connected");
 });

middleware(app);
routes(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
