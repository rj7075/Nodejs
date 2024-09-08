// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const database = "E-commerce";
// const client = new MongoClient(url);
const dbconnect = require("./Mongodbmain");

const insert = async () => {
  const db = await dbconnect();
  const result = await db.insertOne(
    // inserting multiple records
    {
      name: "Baljeet",
      work: "Comptition",
      price: "priceless",
      category: "upsc",
    },
    {
      name: "Ranjeet 1",
      work: "software developer",
    }
  );

  if (result.acknowledge) console.log("data inserted");
};
// async function dbConnect() {
//   let result = await client.connect();
//   db = result.db(database);
//   return db.collection("Products");
// }
insert();
