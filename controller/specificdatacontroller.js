const express = require("express");
const schema = require("../models/models");
var router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const newspecificdata = await schema.findById(_id);
    res.send(newspecificdata);
    res.send(_id);
  } catch (e) {
    res.json(e);
  }
});
module.exports = router;
