const express = require("express");
const router = express.Router();
const {getItemsMen, getItemsChildren, getItemsWomen} = require("../controllers/itemsController"); 

router.get("/men", getItemsMen);
router.get("/women", getItemsWomen);
router.get("/children", getItemsChildren);


module.exports = router;