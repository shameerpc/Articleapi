const express=require("express");
const router=express.Router()
var catagoryController = require('../controllers/categoryController');

router.route('/')
    .post(catagoryController.new);
    router.route('/').get( catagoryController.getCategories);       

module.exports= router;