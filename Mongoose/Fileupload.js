const express = require("express");
const multer = require("multer");
const app = express();

// Configure storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "_" + Date.now() + ".jpg"); // Modify the file name
  },
});

// Initialize multer with the defined storage
const upload = multer({ storage }).single("user_file");

app.post("/upload", upload, (req, res) => {
  res.send("File uploaded");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
