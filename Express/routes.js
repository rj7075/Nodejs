const express = require("express");
const app = express();
app.get("", (req, resp) => {
  console.log("data sent by browser", req.query.name);

  resp.send(
    `
    <h1>Hello this is home page Mr Ranjeet Yadav</h1> <br><a href="/about">Go to about page</a>`
  );
});

app.get("/about", (req, resp) => {
  resp.send(`
    
    Welcome to About page,
    <a href="/help">Go to help page</a>
    <br>
    <input type = "text" placeholder="user Name" value="${req.query.name}"/>
    <br>
    <button>click me<button/>`);
});

app.get("/help", (req, resp) => {
  resp.send(
    ` <a href="/">Go to help home page</a>
    [
    {
      name: "Ranjeet",
      email: "rj7075yadav@gmail.com",
      mob_no: "9838692186",
    },
    {
      name: "Rahul",
    },
    {
      name: "Mukesh",
    },
  ]`
  );
});

app.listen(5000);
