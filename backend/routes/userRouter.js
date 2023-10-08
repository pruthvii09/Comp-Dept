const express = require("express");

const {
  getSingleProfile,
  signup,
  login,
  forgetPassword,
  sendMail,
  updatePassword,
  getCertificates,
  getAllProfile,
  deleteSignleProfile,
  sendMailToAll,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/:id", authMiddleware, getSingleProfile);
router.get("/", getAllProfile);
router.get("/certi/:user", getCertificates);
router.delete("/:id", deleteSignleProfile);
router.post("/signup", signup);
router.post("/login", login);
router.post("/forget", forgetPassword);
router.post("/sendMail", sendMailToAll);
router.post("/send-email/:category", sendMail);
router.patch("/:id", updatePassword);

module.exports = router;
