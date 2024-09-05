const http = require("http"); //creating server

const DataControl = (req, resp) => {
  resp.write("<h1>Hello this is Ranjeet bhai</h1>");
  resp.end();
};
//Normal function
function test(a, b) {
  console.log(a + b);
}
//Arrow function
const sum = (a, b) => {
  console.log(a + b);
};
// http method handle req and resp
// both are creating server with createserver method
// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello this is Ranjeet bhai</h1>");
//     resp.end();
// }).listen(4500);

http.createServer(DataControl).listen(5500);
