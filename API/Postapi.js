const express = require("express");
const dbconnect = require("../MongoDb/Mongodbmain");
const app = express();

app.use(express.json());
app.post("/", async (req, resp) => {
  let data = await dbconnect();
  let result = await data.insertOne(req.body); //insert data to body postman
  resp.send(result); //send data to body postman
});

app.listen(5000);
