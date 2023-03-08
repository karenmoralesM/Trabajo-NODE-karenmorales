
const express = require('express')
const fs = require('fs')
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //TODO tracks.js [tracks,js]
    return fileName.split('.').shift()
}


fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) //TODO index, tracks
    if (name !== 'index') {
        console.log(`cargando ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`)) //TODO http://localhost:3000/api/tracks

    }
})












module.exports = router


/**  el index es el encargado de gestionar la carga dinamica en la cual
 el escana todos los archivos que se encuentran en el directorio de las rutas
 primero se filtra se remueve la extension y se va a omitir el archivo index
 se hace la carga dinamica de esa ruta con su controlador y empezamos a separar un poco
que en el separador quede con el separador, y que las rutas quede en las rutas y asi sera mas ordenado
 * 
*/

