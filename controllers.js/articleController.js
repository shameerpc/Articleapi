

const Article = require('../models.js/Article');


exports.new = async (req, res) => {
    try {
      const article = new Article({
        heading: req.body.heading,
        readTime: req.body.readTime,
        description: req.body.description,
        categories: req.body.categories,
        image: req.body.image,
        verified: req.body.verified,
        newest: req.body.newest,
        trending: req.body.trending,
      });
  
      const savedArticle = await article.save();
      
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

  exports.getarticles = async (req, res) => {
    try {
      // Use the await keyword to wait for the database query to complete
      const articles = await Article.find({ delstatus: false });
  
      // Check if there are articles found
      if (articles.length === 0) {
        return res.status(404).json({
          status: "error",
          message: "No articles found",
        });
      }
  
      // Send the articles as a JSON response
      res.status(200).json({
        status: "success",
        message: "Articles retrieved successfully",
        data: articles,
      });
    } catch (error) {
      // Handle any errors that occur during the database query
      console.error("Error retrieving articles:", error);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  };  
  