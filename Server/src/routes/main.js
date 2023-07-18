const { Router } = require("express");
const passwRouter = require("./passwRouter");

const router = Router();

router.use("/login", passwRouter);
//
module.exports = router;
