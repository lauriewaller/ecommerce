import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json()); // adds new middleware to parse JSON data in body of request. Fixes "message": "Cannot read property 'email' of undefined" when making Post request.
app.use(express.urlencoded({ extended: true })); //this line also works in tandem so that all post requests with a body will be parsed.

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  //sb stands for sandbox
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
// the code below makes it possible to serve react files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// }); removed this bc root address should point to build version of react

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
