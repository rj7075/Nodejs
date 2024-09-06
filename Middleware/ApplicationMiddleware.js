const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("please Provide Age");
  } else if (req.query.age < 18) {
    resp.send("You can not acess this page please provide valid age");
  } else {
    next();
  }
};
app.use(reqFilter);

app.get("/users", (req, resp) => {
  resp.send("Welcome to Users Page");
});

app.get("/", (req, resp) => {
  resp.send("Welcome to Home Page");
});

app.get("/About", (_, resp) => {
  resp.send("Ranjeet yaadv");
});

app.listen(4500);
