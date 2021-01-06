const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
// import routes
const userRoutes = require("./routes/users");

// Conectando base de datos
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/rest-api", { useNewUrlParser: true })
  .then(db => console.log("db is connect"))
  .catch(err => console.log(err));

// settings
app.set("json spaces", 4);
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/users", userRoutes);

// static files

// errors handlers

// start the server
app.listen(app.get("port"), () => {
  console.log("App listening on port ", app.get("port"));
});
