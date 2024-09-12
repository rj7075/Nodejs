const express = require("express");
require("./config");
const Product = require("./product");
const { MongoGridFSStreamError } = require("mongodb");

const app = express();
app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  console.log(req.params.key);

  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { branch: { $regex: req.params.key } }, // you can also search for multiple field
    ],
  });
  resp.send(data);
});

app.listen(5000);
