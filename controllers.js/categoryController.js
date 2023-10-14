
const categories = require('../models.js/Category');


exports.new = async (req, res) => {
    try {
      const Categories = new categories({
        name: req.body.name,
        description: req.body.description,
      
      });
  
      const savedCategories = await Categories.save();
      
      res.json({
        status: "success",
        message: 'Successfully Created',
        data: savedCategories
      });
    } catch (err) {
      res.json({
        status: "error",
        message: err.message,
      });
    }
  };

  exports.getCategories = async (req, res) => {
    try {
      const categoriesData = await categories.find();
  
      if (categoriesData) {
        res.status(200).json({
          status: 'success',
          message: 'Categories retrieved successfully',
          data: categoriesData,
        });
      } else {
        res.status(404).json({
          status: 'error',
          message: 'No categories found',
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        error: error.message,
      });
    }
  };
  