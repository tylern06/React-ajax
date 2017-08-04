// app.js

var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var cors = require("cors");
//bodyParser.json(): Parses the text as JSON and exposes the resulting object on req.body.
var bodyParser = require("body-parser");
var app = express();
//set up absolute path of project directory to serve static files
// app.use(express.static(__dirname));
app.use(express.static(__dirname + "/client"));
// app.use(express.static(__dirname + "/server"));

// "/" will search for index.html file for rocot path
app.get("/", function(req, res) {
  // res.send("hello");
  // res.sendFile("about.html");
  // res.sendFile(path.join(__dirname + "/index.html"));
});

//allows used of bluebird Promises
mongoose.Promise = require("bluebird");
// mongoose.Promise = Promise;

//connect to mongoose
mongoose
  .connect("mongodb://localhost/backend-ajax")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => {
    console.log("App starting error", err);
  });

// Required application specific custom router module
var ItemRouter = require("./server/src/routes/itemRouter");
// Use middlewares to set view engine and post json data to the server
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/items", ItemRouter);

var port = 4200;
app.listen(port, function() {
  console.log("server is running on port:", 4200);
});
