require("dotenv").config();
const express = require("express");
const { dbConnect } = require("./utiles/db.js");
const app = express();
const cros = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = process.env.PORT;


app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cros({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);


app.get("/", (req, res) => res.send("Hello World!"));

dbConnect();
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
