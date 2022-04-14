const express = require("express");
require("./db/config.js");
const employeec = require("./controller/employeec.js");
const app = express();

const port = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
app.use("/employee", employeec);
