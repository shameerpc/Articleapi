const express=require("express");
const router=express.Router()
var articleController = require('../controllers/articleController');
const upload = require("../middleware/upload")

router.route('/')
    .post(upload.single('Image'),articleController.createArticle);
    router.route('/').get( articleController.getArticles);   
    router.route('/category/:categoryName').get( articleController.getArticlesByCategory);  
    router.route('/:articleId').put(upload.single('Image'), articleController.updateArticle);    
    router.route('/:articleId').post( articleController.deleteArticle);    

module.exports= router;

