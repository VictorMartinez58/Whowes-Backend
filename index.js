'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 4000;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/whowes_api_rest", {useNewUrlParser: true}).then(() => {
    console.log("Conected")

    //Listen HTTP
    app.listen(port, () => {
        console.log("Server running at http://localhost:"+port);
    })
})