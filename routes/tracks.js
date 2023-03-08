const express = require("express");
const router = express.Router();
const customHeader = require("../milddleware/customHeader");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItems, getItem, createItem, updateItem } = require("../controllers/tracks");


//generamos la ruta de caciones ruta que va a tener tanto
//metodo GET, POST, DELETE, PUT

//TODO http://localhost/tracks GET, POST, DELETE, PUT


/***
 * 1. lista de los items

*/
router.get("/", getItems);
/***
 * 2. obtener detalle de items

*/

router.get("/:id", validatorGetItem, getItem);

/***
 * 3.  crear un registro

*/

router.post("/", validatorCreateItem, createItem);

/***
 * 4. actualizar un registro

*/

router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);


module.exports = router;






//esta es una ruta de caciones