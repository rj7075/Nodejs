const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "E-commerce";
const client = new MongoClient(url);

async function dbconnect() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection("Products");
}

module.exports = dbconnect;
