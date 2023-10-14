const express=require("express");
const router=express.Router()
var articleController = require('../controllers.js/articleController');

router.route('/')
    .post(articleController.new);

module.exports= router;

