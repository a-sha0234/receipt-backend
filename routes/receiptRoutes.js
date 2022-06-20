const receipt = require("../models/receiptSchema");
const receiptController = require("../controllers/receiptController");

const express = require("express");

const router = express.Router();

router.get("/", receiptController.receipts_get);

router.post("/createReceipt", receiptController.receipts_post);

router.put("/update/:id", receiptController.receipts_put);

router.delete("/delete/:id", receiptController.receipts_delete);

module.exports = router;
