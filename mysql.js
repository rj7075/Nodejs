const mysql = require("mysql");
const { Logger } = require("simple-node-logger");
const con = mysql.createConnection({
  host: "localhost",
  username: "root",
  password: "",
  database: "Products",
});
con.connect((err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("connected");
  }
});
