'use strict'

const mongoose = require('mongoose');
const app = require('./app'); //import express


const dotenv = require('dotenv'); 
dotenv.config();//Read .env
const port = process.env.PORT || 4000;

const config = require('./config/db');

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(config.database, {useNewUrlParser: true}).then(() => {
    console.log("Conected")

    //Listen HTTP
    app.listen(port, () => {
        console.log("Server running at http://localhost:"+port);
    })
})