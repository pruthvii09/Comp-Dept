const express = require("express");

const { certificateRequest } = require("../controllers/certificateController");

const router = express.Router();

router.post("/", certificateRequest);

module.exports = router;
