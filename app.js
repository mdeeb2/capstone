const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const accRoutes = require("./Routes/acroutes");
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


