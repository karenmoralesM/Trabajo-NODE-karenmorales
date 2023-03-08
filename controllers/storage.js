const { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL;



/**1 METODO = obteniene la lista de base de rados!
 * @param {*} req
 *@param {*} res
 */

const getItems = async (req, res) => {
    const data = await storageModel.find({});

    res.send({ data });
};


/**2 METODO = Obtiene un detalle!
 * @param {*} req
 *@param {*} res
 */



const getItem = (req, res) => { };


/**3 METODO = Inserta un registro!
 * @param {*} req
 *@param {*} res
 */

const createItem = async (req, res) => {
    const { body, file } = req;
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({ data })

};



/**4 METODO = Actualiza un registro!
 * @param {*} req
 *@param {*} res
 */

const updateItem = (req, res) => { };



/**5  METODO = Elimina un registro!
 * @param {*} req
 *@param {*} res
 */

const deleteItem = (req, res) => { };




module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
