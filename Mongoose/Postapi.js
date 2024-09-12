const express = require("express");
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(req.body);

  resp.send(req.body);
});

app.get("/list", async (req, resp) => {
  let data = await Product.find();

  resp.send(data);
});

app.delete("/remove/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.deleteOne(req.params);
  resp.send("done");
});

app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.updateOne(
    req.params, //condition
    {
      $set: req.body, //updated data
    }
  );
  resp.send(data);
});

app.listen(5000);
