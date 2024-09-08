const { MongoClient } = require("mongodb");
// const MongoClient = require("mongodb").Mongoclient; alternamte way to initialize
const url = "mongodb://localhost:27017";
const database = "E-commerce";
const client = new MongoClient(url);
async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("Products");
  let response = await collection.find({}).toArray();
  console.log(response);

  //   let response=await collection.find()
}

getData();
