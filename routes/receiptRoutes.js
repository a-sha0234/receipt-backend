const receipt = require("../models/receiptSchema");
const { v4: uuidv4 } = require("uuid");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // router to get all receipts
  receipt
    .find() // find all receipts
    .sort({ createAt: 1 }) // retirve them starting from the latest receipt
    .then((result) => {
      res.json(result); // send the data as a response
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createReceipt", (req, res) => {
  // route to create a receipt
  const createReceipt = new receipt({
    name: req.body.name,
    cost: req.body.cost,
    location: req.body.location,
    id: uuidv4(),
  }).save((err) => {
    // save to database
    res.send(err);
  });
});

router.put("/update/:id", (req, res) => {
  // route to update the receipt
  receipt.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    res.json("updated ");
  });
});

router.delete("/delete/:id", (req, res) => {
  // route to delete a blog
  receipt.findByIdAndDelete({ id: req.params.id }).then((res) => {
    res.json("receipt deleted successfully ");
  });
});

module.exports = router;
