const fs=require('fs');
console.log("file system");
fs.writeFileSync("Hello.text","File system learned")// it will create a file and write file system learned
 // you need to iumport fs to use fs system
console.log("File system learned");
console.log("..>>",__filename);
console.log(__dirname);