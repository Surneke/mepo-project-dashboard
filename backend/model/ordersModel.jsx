const { Schema, model, Types } = require("mongoose");

const ETypeOrder = {
  ORDERED: "ORDERED",
  COMPLETED: "COMPLETED",
  DELIVERING: "DELIVERING",
};

const OrderSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User" },
    fullname: { type: String, required: true },
    email: String,
    address: { type: Types.ObjectId, required: "Address" },
    orderItem: { type: Types.ObjectId, ref: "Product" },
    orderStatus: {
      type: String,
      default: ETypeOrder.ORDERED,
      enum: Object.values(ETypeOrder),
    },
    amount: { type: Number, default: 1 },
    size: { type: String, required: true },
    paymentID: { type: String, default: "" },
  },
  { timestamps: true }
);

exports.OrderModel = model("Order", OrderSchema);
