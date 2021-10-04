const express = require("express");
const userAuthRoutes = require("./userAuthRoutes.js");
const superUserAuthRoutes = require("./superUserAuthRoutes.js");
const otpRoutes = require("./otpRoutes.js");
const verificationEmailRoutes = require("./verificationEmailRoutes.js");
const genericContactRoutes = require("./genericContactRoutes.js");
const vendorContactRoutes = require("./vendorContactRoutes.js");
const { authRequired, forwardAuthenticated } = require("../middlewares/authMiddleware.js");
const blockUserRoutes = require("./blockUserRoutes.js");
const serviceRequestRoutes = require("./serviceRequestRoutes.js");
const attendanceRoutes = require("./attendanceRoutes");
const getUseRoutes = require("./getUserRoutes");
const vehicleRoutes = require("./vehicleRoutes");
const router = express.Router();

router.use("/user",userAuthRoutes);
router.use("/superUser",superUserAuthRoutes);
router.use("/otp",otpRoutes);
router.use("/email",verificationEmailRoutes);
router.use("/genericContact", genericContactRoutes);
router.use("/vendorContact", vendorContactRoutes);
router.use("/attendance", attendanceRoutes);
router.use("/block", blockUserRoutes);
router.use("/serviceRequest", serviceRequestRoutes);
router.use("/users", getUseRoutes);
router.use("/vehicle", vehicleRoutes);

router.get("/secret", authRequired, (req, res) => {
  res.send("Secret Found");
});
router.get("/",(req,res)=>{
	res.send('<h1>Helloooo</h1>');

});

module.exports = router;