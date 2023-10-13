const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const articlesroutes = require("./routes/articles");
const categoriesRoute = require("./routes/categories");
const PORT = process.env.PORT 
const app = express();

// Connect to your MongoDB database.
mongoose.connect("mongodb://localhost:27017/article",{
    useNewUrlParser: true,
    useUbifiedTopology: true,
});

// Use body-parser middleware for parsing JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.use('/article', articlesroutes);
app.use('/categories',categoriesRoute);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT); 
});


