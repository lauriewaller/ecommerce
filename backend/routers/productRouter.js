import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();
//sends list of products to frontend
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);
//creates 6 products from data.products
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

//returns product details
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    //findById returns a promise. By using await, this will be converted to real data and set to product
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

//returns products in a specific category
productRouter.get(
  "/category/:category",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.where({ category: req.params.category });
    if (products) {
      res.send(products);
    } else {
      res.status(404).send({ message: "Products for Category Not Found" });
    }
  })
);

//returns all categories of products
productRouter.get(
  "/categories/all",
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct("category");
    if (categories) {
      res.send(categories);
    } else {
      res.status(404).send({ message: "Categories Not Found" });
    }
  })
);

export default productRouter;

// .find().sort({field : 1}).distinct('field')
