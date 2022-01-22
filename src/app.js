const express = require("express");
require("./db/mongoose");
const path = require("path");

const router = require("./routers/user.route");
const app = express();

//to prevent cors issue on development env
//to not be used on actual production env outside Heroku
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
const publicPath = path.join(__dirname, "build");
app.use(express.static(publicPath));
app.use(express.json());
app.use(router);

//local port is 3001 vs production (address)port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("listen on port " + PORT);
});
