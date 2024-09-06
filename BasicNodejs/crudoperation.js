const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "CrudFile");
const filepath = `${dirPath}/apple.txt`;
//creation of file
// fs.writeFileSync(
//   filepath,
//   "This method will create the file using directory name"
// );
// //Reading a file
// fs.readFile(filepath, "utf8", (err, item) => {
//   console.log(item);
// });

// //UPdate the file
// fs.appendFile(filepath, "and file name is apple,txt", (err, item) => {
//   if (!err) {
//     console.log("file got updated");
//   }
// });

// // Rename the file
// fs.rename(filepath, `${dirPath}/mango.txt`, (err) => {
//   if (!err) {
//     console.log("File name got updated");
//   }
// });

fs.unlinkSync(`${dirPath}/mango.txt`);
