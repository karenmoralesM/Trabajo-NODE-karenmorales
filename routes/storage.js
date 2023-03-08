/**este va a ser el nombre de la ruta */

const express = require("express")
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { createItem } = require("../controllers/storage");
//TODO hhtp://localhost:3001/api/storage


router.post("/", uploadMiddleware.single("myfile"), createItem);


module.exports = router;
