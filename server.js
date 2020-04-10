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

app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM management.customer", (err, rows, fields) => {
    if (err) throw err;

    res.send(rows);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
