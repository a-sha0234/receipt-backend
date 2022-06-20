const receipt = require("../models/receiptSchema");
const express = require("express");

const receipts_get = (req, res) => {
  receipt
    .find() // find all receipts
    .sort({ createAt: -1 }) // retirve them starting from the latest receipt
    .then((result) => {
      res.json(result); // send the data as a response
    })
    .catch((err) => {
      console.log(err);
    });
};

const receipts_post = (req, res) => {
  // route to create a receipt and save to database
  const createReceipt = new receipt({
    name: req.body.name,
    cost: req.body.price,
    location: req.body.location,
    id: req.body.id,
  }).save((err) => {
    // save to database
    res.send(err);
    console.log(err);
  });
};

const receipts_put = (req, res) => {
  // route to update the receipt

  receipt
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const receipts_delete = (req, res) => {
  // route to delete a blog
  receipt
    .findByIdAndDelete({ _id: req.params.id })
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { receipts_get, receipts_post, receipts_put, receipts_delete };
