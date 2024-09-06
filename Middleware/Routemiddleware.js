const express = require("express");
const app = express();
const reqFilter = require("./MiddlewareFile"); //you cn use middleware by importing from other file
const route = express.Router(); // you can use this to control the acess of different pages

route.use(reqFilter); //using routes.get;
// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("please Provide Age");
//   } else if (req.query.age < 18) {
//     resp.send("You can not acess this page please provide valid age");
//   } else {
//     next();
//   }
// };
// app.use(reqFilter);//middle ware basically used to control the acess of web pages which page a user can acess or not

app.get("/users", reqFilter, (req, resp) => {
  resp.send("Welcome to Users Page");
});

app.get("/", reqFilter, (req, resp) => {
  resp.send("Welcome to Home Page");
});

route.get("/About", (_, resp) => {
  resp.send("Ranjeet yaadv About");
});

route.get("/Contact", (_, resp) => {
  resp.send("Ranjeet yaadv contact");
});

app.use("/", route); //for using route to control the pages
app.listen(4500);
