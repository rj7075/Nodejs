const express = require("express");
const dbconnect = require("../MongoDb/Mongodbmain");

const app = express();
app.get("/", async (req, resp) => {
  let data = await dbconnect();
  data = await data.find().toArray();

  resp.send(data);
});

app.listen(5000);
