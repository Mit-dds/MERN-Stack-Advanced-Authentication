const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
} = require("../controllers/auth");

// router.route("/register").post(register);
router.post("/register", register);

// router.route("/login").post(login);
router.post("/login", login);

// router.route("/forgotpassword").post(forgotpassword);
router.post("/forgotpassword", forgotpassword);

// router.route("/resetpassword/:resetToken").put(resetpassword);
router.put("/resetpassword/:resetToken", resetpassword);


module.exports = router;
