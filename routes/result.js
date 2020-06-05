'use strict'

const express = require("express");
const router = express.Router();
const resultController = require("../controllers/resultController");
const auth = require('../config/auth');


router.post('/save', auth,resultController.save);
router.get('/results-user/:user_id', auth,resultController.getResultsByUser);
router.get('/result/:_id', auth,resultController.getResult);

module.exports = router;
