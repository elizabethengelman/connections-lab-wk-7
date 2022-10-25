const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", (req, res) => {
  if (!req.files) {
    res.send({ success: false, message: "No file uploaded" });
  }
  let file = req.files.filetoupload;
  file.mv("./uploads/" + file.name);
  res.send({ success: true, message: "File uploaded" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
