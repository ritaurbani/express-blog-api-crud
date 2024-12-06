//Inizializziamo
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController")
const checkPostExists = require("../middleware/checkPostExists")

//index
router.get("/", postsController.index);

//show
router.get("/:id", checkPostExists, postsController.show);

//create
router.post("/", postsController.create);

//update
router.put("/:id", checkPostExists, postsController.update);

//modify
router.patch("/:id", checkPostExists, postsController.modify);

//destroy
router.delete("/:id", checkPostExists, postsController.destroy);

module.exports = router;