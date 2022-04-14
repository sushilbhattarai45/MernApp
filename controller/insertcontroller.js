const express = require("express");
const schema = require("../models/models");
var router = express.Router();

router.post("/", async (req, res) => {
  try {
    var getdata = new schema(req.body);
    var savegetdata = await getdata.save();
    res.json(savegetdata);
  } catch (e) {
    res.json(e);
  }
});
module.exports = router;
