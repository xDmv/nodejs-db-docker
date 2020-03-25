const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models/");
const app = express();
db.sequelize.sync();

// const get = require('./app/controllers/test.controller');
// db.sequelize.sync({ force: true }).then(() => {
// 	console.log("Drop and re-sync db.");
//   });

let corsOptions = {
  origin: "http://localhost:5100"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to bezkoder application." });
});

// app.get("/api", (req, res) =>{

// });
require("./app/routes/test.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});