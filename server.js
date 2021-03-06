const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const receiptRoutes = require("./routes/receiptRoutes");

const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config(); // allow us to hide private variables in the .env file
app.use(express.urlencoded({ extended: true })); //allows for form data to work
app.use(express.json());

app.use(
  cors({
    //allow requests from, anywhere
    origin: "*",
  })
);

mongoose
  .connect(process.env.DBURL, { useNewUrlParser: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

app.use(receiptRoutes);
