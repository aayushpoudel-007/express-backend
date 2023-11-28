const router = require("express").Router();
const userCtrl = require("../controller/userCtrl");

router.get("/register", userCtrl.createUser);

module.exports = router;