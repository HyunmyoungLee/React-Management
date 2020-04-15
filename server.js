const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 5000;
const mysql = require("mysql");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "sk27389310",
  database: "management",
});
connection.connect();

const multer = require("multer");
//const uuidv4 = require("uuidv4");
/*const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, uuidv4 + "-" + fileName);
  },
});*/
const upload = multer({
  dest: "./upload",
  //storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});
app.get("/api/customers", (req, res) => {
  connection.query(
    "SELECT * FROM management.customer WHERE isDeleted = 0",
    (err, rows, fields) => {
      if (err) throw err;

      res.send(rows);
    }
  );
});

app.use("/image", express.static("./upload"));
app.post("/api/customers", upload.single("image"), (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  let sql =
    "INSERT INTO MANAGEMENT.CUSTOMER VALUES(null, ?, ? ,? ,? ,?, now(), 0)";
  let image = url + "/image/" + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, field) => {
    res.send(rows);
  });
});

app.delete("/api/customers/:id", (req, res) => {
  let sql = "UPDATE MANAGEMENT.CUSTOMER SET isDeleted = 1 WHERE id = ?";
  let params = [req.params.id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
