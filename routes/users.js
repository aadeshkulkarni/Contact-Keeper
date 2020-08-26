const express = require("express");
const router = express.Router();

const user = require("../models/User");

// @route     POST api/users
// @desc      Regiter a user
// @access    Public
router.post("/", (req, res) => res.send(req.body));

module.exports = router;
