const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "Hyunmyoung Lee",
      birthday: "930902",
      gender: "Male",
      job: "Student",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "Nakyung Lee",
      birthday: "971212",
      gender: "Female",
      job: "Student",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "Myoungsuk Lee",
      birthday: "930902",
      gender: "Female",
      job: "Student",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
