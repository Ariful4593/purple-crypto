import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transaction = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    transaction_id: {
      type: String,
      required: true,
    },
    transaction_key: {
      type: String,
      required: true,
    },
    amount_receive: {
      type: Number,
      required: true,
    },
    giftCard: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};

const Transaction = mongoose.model("Transaction", transaction);

export default Transaction;
