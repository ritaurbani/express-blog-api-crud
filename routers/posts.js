//Inizializziamo
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController")

//index
router.get("/", postsController.index);

//show
router.get("/", postsController.show);

//create
router.post("/", postsController.create);

//update
router.put("/", postsController.update);

//modify
router.patch("/", postsController.modify);

//destroy
router.delete("/", postsController.destroy);

module.exports = router;