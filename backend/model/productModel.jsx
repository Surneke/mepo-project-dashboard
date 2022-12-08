const { Schema, model } = require('mongoose')

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    images: { type: Array, default: [] },
    gender: String,
    unique: { type: Boolean, default: false },
    special: { type: Boolean, default: false },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

exports.ProductModel = model("Product", ProductSchema);