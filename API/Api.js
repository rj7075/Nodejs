// Example how to write a APi
const http = require("http");
const data = require("./Data");

http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(4500, () => {
    console.log("Server is running on port 4500");
  });
