const Article = require('../models/Article');
//const Category = require('../models/Category');

// Create a new article
exports.createArticle = async (req, res) => {
  try {
    const article = new Article({
      heading: req.body.heading,
      readTime: req.body.readTime,
      description: req.body.description,
      categories: req.body.categories,
      Image: req.file.filename,
      verified: req.body.verified,
      newest: req.body.newest,
      trending: req.body.trending,
    });

    const savedArticle = await article.save();

    res.status(201).json({
      status: 'success',
      message: 'Article created successfully',
      data: savedArticle,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// Get all articles
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find({ delstatus: false });

    if (articles.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'No articles found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Articles retrieved successfully',
      data: articles,
    });
  } catch (error) {
    console.error('Error retrieving articles:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: error.message,
    });
  }
};

// Get articles by category
exports.getArticlesByCategory = async (req, res) => {
  try {
    const categoryName = req.params.categoryName;

    const articles = await Article.find({ categories: categoryName });

    res.status(200).json({
      status: 'success',
      message: 'Articles retrieved successfully',
      data: articles,
    });
  } catch (error) {
    console.error('Error retrieving articles by category:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: error.message,
    });
  }
};

// Update an article
exports.updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.articleId, req.body, { new: true });
    
    if (!updatedArticle) {
      return res.status(404).json({
        status: 'error',
        message: 'Article not found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Article updated successfully',
      data: updatedArticle,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.deleteArticle = async (req, res) => {
    try {
      const articleId = req.params.articleId;
  
      // Find the article by ID
      const article = await Article.findById(articleId);
  
      if (!article) {
        return res.status(404).json({
          status: 'error',
          message: 'Article not found',
        });
      }
  
      // Mark the article for deletion
      article.delstatus = true;
  
      // Save the updated article
      await article.save();
  
      res.status(200).json({
        status: 'success',
        message: 'Article marked for deletion successfully',
        data: article,
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  };
  


