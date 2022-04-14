const express = require("express");
require("./db/config.js");
const insert = require("./controller/insertcontroller.js");
const deletedata = require("./controller/deletecontroller.js");
const getdata = require("./controller/getdatacontroller.js");
const getspecificdata = require("./controller/specificdatacontroller.js");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send("helo world");
});
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
app.use("/insert", insert);
app.use("/getdata", getdata);
app.use("/getdata/", getspecificdata);
app.use("/delete", deletedata);
