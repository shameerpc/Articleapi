const mongoose = require("mongoose");
var { Schema } = mongoose;

var articleSchema = new Schema({
  heading: {
    type: String,
  },
  categories: [
    // {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Category', // Reference to the Category model
    // },
    String
  ],
  description: {
    type: String,
  },
  readTime: {
    type: Number,
  },
  delstatus: {
    type: Boolean,
    default: false,
  },
  image: [
    {
      type: String,
    },
  ],
  verified: {
    type: Boolean,
  },
  newest: {
    type: Boolean,
  },

  trending: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Article", articleSchema);
