
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
  