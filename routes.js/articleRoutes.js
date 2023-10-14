const express=require("express");
const router=express.Router()
var articleController = require('../controllers.js/articleController');

router.route('/')
    .post(articleController.new);
    router.route('/').get( articleController.getarticles);    

module.exports= router;

