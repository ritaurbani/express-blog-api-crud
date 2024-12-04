//Inizializziamo
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController")

//index
router.get("/", postsController.index);

//show
router.get("/:id", postsController.show);

//create
router.post("/", postsController.create);

//update
router.put("/:id", postsController.update);

//modify
router.patch("/:id", postsController.modify);

//destroy
router.delete("/:id", postsController.destroy);

module.exports = router;