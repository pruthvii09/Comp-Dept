const express = require("express");

const {
  certificateRequest,
  getAllCertificate,
  updateCertificate,
} = require("../controllers/certificateController");

const router = express.Router();

router.post("/", certificateRequest);
router.put("/:id", updateCertificate);
router.get("/", getAllCertificate);

module.exports = router;
