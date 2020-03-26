const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models/");
const app = express();
db.sequelize.sync();

let corsOptions = {
	origin: "http://localhost:5101"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.status(200).json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/test.routes")(app);

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});