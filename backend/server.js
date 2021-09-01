import express from "express";
import data from "./data.js";

//create an app from express
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

// define first route. root of backend will respond "server is ready" when opened
//create a handler for this path -- handler will accept request and respond
app.get("/", (req, res) => {
  res.send("Server is ready!");
});

// call listen method of app
app.listen(5000, () => {
  console.log("Serve at http://localhost:5000");
});

//entry point of backend application
//Creates an Express server. Express is a node package that makes it easy to create a powerful server
//npm init
//npm install express
