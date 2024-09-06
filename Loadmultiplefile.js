// you will learn how to render multiple html file

const express = require("express");
const app = express();
const path = require("path");

const publicpath = path.join(__dirname, "Public");
console.log(__dirname);
// app.use(express.static(publicpath));

app.set("view engine", "ejs"); //ejs file basically used for loading dtnamic data
//ejs is template engine
app.get("", (_, resp) => {
  resp.sendFile(`${publicpath}/Home.html`);
});

app.get("/contact", (_, resp) => {
  resp.sendFile(`${publicpath}/Contact.html`);
});

app.get("/Login", (_, resp) => {
  resp.render("Login");
});

app.get("/profile", (_, resp) => {
  const user = {
    name: "Ranjeet Yadav",
    email: "rj7074yadav@gmail.com",
    batch: "2024",
    skils: [
      "Html",
      "CSS",
      "Javascript",
      "Node js",
      "Express js",
      "Mongo Db",
      "React JS",
      "C",
      "c++",
    ],
    interest: ["Cricket", "hockey", "Muth marna"],
  };
  resp.render("profile", { user });
});

app.get("/about", (_, resp) => {
  resp.sendFile(`${publicpath}/About.html`);
});

app.get("*", (_, resp) => {
  //default page will displayed if page is not exist
  resp.sendFile(`${publicpath}/404.html`);
});

app.listen(5000);
