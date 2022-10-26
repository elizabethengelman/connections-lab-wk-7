const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

/*-----Middleware------*/
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

/*-----Database------*/
let datastore = require("nedb");
const { response } = require("express");
let db = new datastore("trees.db");
db.loadDatabase();

/*-----Routes------*/
app.get("/files", (req, res) => {
  db.find({}, (error, docs) => {
    // let filesToReturn = docs.map((file) => {
    //   let base64encdoded = String.fromCharCode.apply(null, file.data);
    //   let imageData = `data:${file.mimetype};base64,${base64encdoded}`;
    //   return {
    //     imageData: imageData,
    //   };
    // });
    // //TODO: return lat/long, etc

    let filesToReturn = docs.map((file) => {
      return file.name;
    });
    res.send(filesToReturn);
    return;
  });
});

app.post("/upload", (req, res) => {
  if (!req.files) {
    console.log("No file uploaded");
    res.send({ success: false, message: "No file uploaded" });
    return;
  }
  let file = req.files.file;
  file["longitude"] = req.body.longitude;
  file["latitude"] = req.body.latitude;
  console.log("Received file", file.name);
  db.insert(file);
  console.log("File was inserted into the db");
  res.send({ success: true, message: "File uploaded" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
