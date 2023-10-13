const { default: mongoose } = require("mongoose");

const mongoose =require(mongoose)

const articleSchema=new mongoose.Schema({
    heading:String,
    readTime:Number,
    description: String,
    categories:[String],
    image: String,
    verified:Boolean,
    newest:Boolean,
    trending:Boolean

})

module.exports=mongoose.model("Article",articleSchema)