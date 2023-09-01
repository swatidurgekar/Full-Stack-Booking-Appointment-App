const express = require("express");

const formController = require("../controllers/form");

const router = express.Router();

router.post("/userData", formController.postUserData);
router.get("/Users", formController.getUser);
router.post("/deleteUser/:userId", formController.postDelete);
router.get("/", formController.getForm);

module.exports = router;
