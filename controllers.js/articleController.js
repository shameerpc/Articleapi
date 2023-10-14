
const article = require('../models.js/Article');


exports.new = async (req, res) => {
    try {
      const Article = new article({
        heading: req.body.heading,
        readTime: req.body.readTime,
        description: req.body.description,
        categories: req.body.categories,
        image: req.body.image,
        verified: req.body.verified,
        newest: req.body.newest,
        trending: req.body.trending,
      });
  
      const savedArticle = await Article.save();
      
      res.json({
        status: "success",
        message: 'Successfully Created',
        data: savedArticle
      });
    } catch (err) {
      res.json({
        status: "error",
        message: err.message,
      });
    }
  };
  