const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");

const app = express();
const UserRoutes = require("./routes/form");

app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(UserRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
