const express=require("express");
const router=express.Router()
var articleController = require('../controllers.js/articleController');

router.route('/')
    .post(articleController.createArticle);
    router.route('/').get( articleController.getArticles);   
    router.route('/category/:categoryName').get( articleController.getArticlesByCategory);  
    router.route('/:articleId').put( articleController.updateArticle);    
    router.route('/:articleId').post( articleController.deleteArticle);    

module.exports= router;

