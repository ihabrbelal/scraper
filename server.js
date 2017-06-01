var express = require("express");
// var db = require("./models");
var bodyParser = require("body-parser");
var app = express();
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var expressHandlebars = require('express-handlebars');
var request = require("request");
var PORT = process.env.PORT || 3000;
var router = express.Router();

// require our routes file
require('./config/routes')(router);


app.use(router);
app.use(express.static(__dirname + "/public"));

// setup body barser
app.use(bodyParser.urlencoded({ extended: false }));

// connect handlebars to express app
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var


var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// setup mongoose
mongoose.connect("mongodb://heroku_tc1lwkhz:r84r9tnufkf8q6m7tjvh2sn8b9@ds155091.mlab.com:55091/heroku_tc1lwkhz", function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection is succesful");
    }
});

// listen to the port
app.listen(PORT, function() {
    console.log("app listening to port: ", PORT);
});
