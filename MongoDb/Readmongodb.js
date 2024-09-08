const { MongoClient } = require("mongodb");
// const MongoClient = require("mongodb").Mongoclient; alternamte way to initialize
const url = "mongodb://localhost:27017";
const database = "E-commerce";
const client = new MongoClient(url);

//1st way to read data from database
async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("Products");
  //   let response = await collection.find({ name: "Rahul suman" }).toArray();
  //   console.log(response);

  //   let response=await collection.find();
}
dbConnect();

// 2nd way to get data

// dbConnect().then((resp) => {
//   resp.find().toArray.then((data) => {
//     console.warn(data);
//   });
// });
// Alternate way to get the data
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};

main();
