import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

//creates an api for post request to /api/orders
orderRouter.post(
  "/",
  isAuth, // gives us access to user property on line 25
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const order = new Order({
        //set the parameters equal to items that user passed as the body of this request.
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      //this saves order in the db
      const createdOrder = await order.save();
      //status of new item is 201
      // order: createdOrder passes order to front end
      res
        .status(201)
        .send({ message: "New Order Created", order: createdOrder });
    }
  })
);

export default orderRouter;
