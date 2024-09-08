const dbconnect = require("./Mongodbmain");

const updatedata = async () => {
  let data = await dbconnect();
  let result = await data.updateOne(
    {
      name: "Baljeet",
    },
    {
      $set: { name: "Ranjeet" },
    }
  );
  console.warn(result);
};
updatedata();
