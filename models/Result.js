'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resultSchema = Schema({
    title: String,
    user_id: { type: Schema.ObjectId, ref: 'User' },
    totalPrice: Number,
    products: [String],
    users: [String],
    date: {type: Date, default: Date.now},
    closed: {type: Boolean, default: false},
});


const Result = mongoose.model("Result", resultSchema);
module.exports = Result;

