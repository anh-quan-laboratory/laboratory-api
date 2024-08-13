const express = require("express");
const mogran = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const db = require("./config/database");
const errorHandler = require("./controllers/errorController");

const app = express();
db.connect();

app.use(cors());
app.use(helmet());
app.use(mogran("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tests", require("./routes/testRoutes"));

app.get("/", (req, res) => {
  res.status(200).send("OK!");
});

app.use(errorHandler);

module.exports = app;
