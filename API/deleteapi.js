const express = require("express");
const dbconnect = require("../MongoDb/Mongodbmain");
const app = express();
const mongodb = require("mongodb");

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbconnect();
  data = await data.find().toArray();

  resp.send(data);
});

app.post("/", async (req, resp) => {
  let data = await dbconnect();
  let result = await data.insertOne(req.body); //insert data to body postman
  resp.send(result); //send data to body postman
});

app.put("/:name", async (req, resp) => {
  let data = await dbconnect();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  resp.send({ result: "updated" });
});

app.delete("/:id", async (req, res) => {
  try {
    console.log("Request to delete ID:", req.params.id);

    // Connect to the database
    const data = await dbconnect();

    // Delete document based on the provided ID
    const result = await data.deleteOne({
      _id: new mongodb.ObjectId(req.params.id),
    });

    if (result.deletedCount === 1) {
      res
        .status(200)
        .send({ message: "Document deleted successfully", result });
    } else {
      res.status(404).send({ message: "Document not found" });
    }
  } catch (error) {
    console.error("Error deleting document:", error);
    res
      .status(500)
      .send({ error: "An error occurred while deleting the document" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
