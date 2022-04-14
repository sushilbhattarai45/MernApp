const express = require("express");
const schema = require("../models/models");
var router = express.Router();

router.get("/", async (req, res) => {
  try {
    const findata = await schema.find();
    res.send(findata);
  } catch (e) {
    res.json(e);
  }
});
module.exports = router;
