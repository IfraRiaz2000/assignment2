var express = require("express");
var router = express.Router();
var Product = require("../models/products");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await Product.find()
  
  res.render("products/list", { title:"prui", products});
});

router.get("/", async function (req, res, next) {
  // let products = await Product.find()
  res.send("This my page")
});

router.get("/add", async function (req, res, next) {
  
  res.render("products/add");
});

router.post("/add", async function (req, res, next) {
  let product = new Product(req.body);
  await product.save()
  console.log(product);
  res.send(product);
  
  res.redirect("/products");
});

router.get("/delete/:id", async function (req, res, next) {
  let product = await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products")
 
});



router.post("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
    product.name = req.body.name;
    product.price = req.body.price;
    await product.save();
    res.redirect("/products");
 
});

module.exports = router;
