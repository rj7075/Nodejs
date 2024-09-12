const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

// Connect to the database once
mongoose
  .connect("mongodb://localhost:27017/E-commerce")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Create the model based on the schema
const ProductModel = mongoose.model("Products", ProductSchema);

const saveInDB = async () => {
  try {
    // Create a new product
    let data = new ProductModel({
      name: "Kiara Gorora",
      price: 4800,
      brand: "Brand Name",
      category: "Category Name",
    });

    // Save the product and await the result
    let result = await data.save();

    // Log the saved document
    console.log("Product Saved:", result);
  } catch (err) {
    console.error("Error saving to DB:", err);
  }
};

const updateInDB = async () => {
  try {
    // Update an existing product
    let data = await ProductModel.updateOne(
      { name: "Ranjeet Yadav" },
      { $set: { name: "Sunil" } }
    );
    console.log("Update Result:", data);
  } catch (err) {
    console.error("Error updating in DB:", err);
  }
};

const deleteInDB = async () => {
  try {
    let data = await ProductModel.deleteOne({ name: "Ranjeet Yadav" });
    console.log(data);
  } catch (err) {
    console.log("Error in deleting in DB");
  }
};

const FindInDB = async () => {
  try {
    let data = await ProductModel.find({ name: "Ranjeshwer" });
    console.log(data);
  } catch (err) {
    console.log("Error in finding in DB");
  }
};
// Call saveInDB() and updateInDB() as needed
// saveInDB().then(() => updateInDB());

FindInDB();
