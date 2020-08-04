const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Import routes
const autRoute = require("./routes/auth");

dotenv.config();
//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//Middleware
app.use(express.json());

//Rout middleware
app.use("/api/user", autRoute);

app.listen(3000, () => {
  console.log("server is running at 3000");
});
