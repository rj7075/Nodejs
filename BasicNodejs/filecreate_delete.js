console.log(process.argv[1]); // print the data of command line in array form
const fs = require("fs"); // import of filesystem
const { argv } = require("process"); // importing of argument for command
const input = process.argv; //for taking the input for file
fs.writeFileSync(input[2], input[3]); //it will create a new file taking two argument first is filename
//and sencond is what you want to write in this file.
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]); //remove the file or delete the file
} else {
  console.log("invalid output");
}
