const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const accRoutes = require("./Routes/acroutes");
const chartData = require("./models/chartSchema");
const url = "mongodb+srv://capstone:Cap$tone@capstone.0sifx.mongodb.net/Capstone";

const app = express();

mongoose.connect(
  "mongodb+srv://capstone:Cap$tone@capstone.0sifx.mongodb.net/Capstone",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Establishment!");
});

app.use("/", express.static("public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT ||4200;
app.get("/", function (req, res, next) {
  res.send("Hello world");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/", accRoutes);


app.get("/data", (req, res) => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      chartData
        .find({})
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/adddata", (req, res) => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      var info = new chartData({
        title: req.body.title,
        value: req.body.value,
        color: req.body.color,
      });

      chartData
        .insertMany(info)
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          console.log(error);
        });
      res.redirect("./user.html");
    })
    .catch((error) => {
      console.log(error);
    });
});
