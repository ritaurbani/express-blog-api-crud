const express = require("express")
const router = express.Router();
const tagsController = require("../controllers/tagsController")


//Impostiamo rotta Index e importiamo in app.js
router.get("/", tagsController.index);

module.exports = router;