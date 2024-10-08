const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  productName: { type: String },
  productPrice: { type: Number, min: [0, "TEST"] },
  productCategory: {
    type: String,
    enum: ["Breakfast", "Main Dish", "Drinks", "Dessert"],
  },
  productSupplier: String,
  productQuantity: Number,
  productImage: Array,
  productRegisteredAt: { type: Date, default: Date.now() },
});

const productModel = mongoose.model("Product", productsSchema);

module.exports = productModel;
