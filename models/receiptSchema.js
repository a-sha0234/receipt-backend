const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const receiptSchema = new Schema(
  {
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    location: { type: String, required: true },
    id: { type: String, required: true }, // this will be the uuid
  },
  { timestamps: true } // to get time stamp of when it was created
);

const receipt = mongoose.model("receipt", receiptSchema);

module.exports = receipt;
