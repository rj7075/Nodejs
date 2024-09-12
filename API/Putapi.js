const express = require("express");
const dbconnect = require("../MongoDb/Mongodbmain");
const app = express();

app.use(express.json());

app.put("/", async (req, resp) => {
  let data = await dbconnect();
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: req.body }
  );

  resp.send({ result: "updated" });
});

app.listen(5000);
