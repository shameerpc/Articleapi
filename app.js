const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const articlesroutes = require("./routes/articleRoutes");
const categoriesRoute = require("./routes/categoryRoutes");
const PORT = process.env.PORT || 3000
require('dotenv').config();
const app = express();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

console.log('DATABASE_URL:', process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));


// Use body-parser middleware for parsing JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());


app.use('/article', articlesroutes);
app.use('/categories',categoriesRoute);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT); 
});


