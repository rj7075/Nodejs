const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: String,
  batch: Number,
  status: String,
  branch: String,
});

module.exports = mongoose.model("products", ProductSchema);
