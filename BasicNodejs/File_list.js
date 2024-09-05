const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "Files");
//for creating the file through a loop
// for (i = 0; i < 4; i++) {
//   fs.writeFileSync(
//     dirPath + "/hello " + i + ".txt",
//     "A simple file creation in a looop"
//   );
// }

// to Read the directory
fs.readdir(dirPath, (err, Files) => {
  Files.forEach((item) => {
    console.log("File name is ", item);
  });
});
