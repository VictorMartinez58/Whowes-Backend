'use strict'

const validator = require('validator');
const Result = require('../models/Result');


const controller = {

    save: (req, res) => {
       
        var params = req.body;

        var result = new Result();

        result.title = params.title;
        result.user_id = params.user_id;
        result.totalPrice = params.totalPrice;
        result.products = params.products;
        result.users = params.users;
        


        result.save((err, resultStored) => {

            if (err || !resultStored) {
                return res.status(404).send({
                    status: "error",
                    message: "Somthing went wrong"
                });
            }

            return res.status(200).send({
                status: "success",
                result: resultStored
            });
        });

    },





    getResultsByUser: (req, res) => {

        var user_id = req.params.user_id;

        if (!user_id || user_id == null) {
            return res.status(404).send({
                status: "error",
                message: 'Param error'
            });
        }

        var query = Result.find({"user_id": user_id});
        
        query.sort('-date').exec((err, results) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: 'Error'
                });
            }

            if (!results) {
                return res.status(404).send({
                    status: "error",
                    message: 'No results'
                });
            }

            return res.status(200).send({
                status: "success",
                results
            });

        });
    },



    getResult: (req, res) => {

        var _id = req.params._id;

        if (!_id || _id == null) {
            return res.status(404).send({
                status: "error",
                message: 'Param error'
            });
        }

        var query = Result.findById({_id});
        
        query.sort('-date').exec((err, result) => {

            if (err || !result) {
                return res.status(404).send({
                    status: "error",
                    message: 'No result'
                });
            }

            return res.status(200).send({
                status: "success",
                result
            });

        });
    },


}

module.exports = controller;
