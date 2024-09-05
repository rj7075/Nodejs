const express = require("express");
const app = express();
app.get("", (req, resp) => {
  console.log("data sent by browser", req.query.name);

  resp.send("Hello this is home page Mr Ranjeet Yadav");
});

app.get("/about", (req, resp) => {
  resp.send("Hello this is About page");
});

app.listen(5000);
