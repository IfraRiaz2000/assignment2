var mongoose = require("mongoose");

var productsSchema = mongoose.Schema({
    No:Number,
    name: String,
    details: String,

});

const Products = mongoose.model("products",productsSchema);
module.exports = Products;