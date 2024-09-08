const dbconnect = require("./Mongodbmain");
const deleteData = async () => {
  console.log("Function Called");
  let data = await dbconnect();
  let result = await data.deleteMany({
    name: "Ranjeet",
  });
  console.warn(result);
  if (result.acknowledged) {
    console.log("record deleted");
  }
};

deleteData();
