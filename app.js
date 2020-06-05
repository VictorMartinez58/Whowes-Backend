'use strict'

//Imports
var express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");


//exec express
var app = express();


//Routes files
const userRoutes = require("./routes/user");
const resultRoutes = require("./routes/result");


//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use(cors());


//Use Routes
app.use("/user", userRoutes);
app.use("/result", resultRoutes);

//Export
module.exports = app; 