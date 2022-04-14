const express = require("express");
const schema = require("../models/models");
var router = express.Router();

router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  const deletedata = await schema.findByIdAndDelete(_id);
  const data = {
    status: 200
  };
  res.send(data);
});

module.exports = router;
