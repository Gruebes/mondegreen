const express = require("express");
const passport = require('passport');
const session = require('express-sessions');
const cookieParser = require("cookie-parser");
const path = require("path");
const logger = require('morgan');
const config = require('./config/main');
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const router = require('./router');  

// const PORT = process.env.PORT || 3001;
const app = express();

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

mongoose.Promise = bluebird;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets if in production (running on Heroku)
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static(__dirname + "/public"));
}
app.use("/", routes);

// Connect mongoose to our database
// const db = process.env.MONGODB_URI || "mongodb://localhost/mondegreen";
// MONGODB_URI: mongodb://heroku_qjwhf630:e0ole0oo6gj4tri117jjn8qstl@ds129004.mlab.com:29004/heroku_qjwhf630
mongoose.connect(config.db, function(error) {
    // Log any errors connecting with mongoose
    if (error) {
        console.error(error);
    }
    // Or log a success message
    else {
        console.log("mongoose connection is successful");
    }
});

app.listen(config.port, function() {
    console.log(`🌎 ==> Server now on port ${config.port}!`);
});

router(app);  