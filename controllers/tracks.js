const { matchedData } = require('express-validator');
const { tracksModel } = require('../models')
const { handleHttpError } = require("../utils/handleError");


/**1 METODO = obteniene la lista de base de rados!
 * @param {*} req
 *@param {*} res
 */

const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS');
    }



};


/**2 METODO = Obtiene un detalle!
 * @param {*} req
 *@param {*} res
 */



const getItem = async (req, res) => {

    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.findById();
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEN')
    }
};


/**3 METODO = Inserta un registro!
 * @param {*} req
 *@param {*} res
 */

const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await tracksModel.create(body);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS');
    }
};



/**4 METODO = Actualiza un registro!
 * @param {*} req
 *@param {*} res
 */

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await tracksModel.findByIdAndUpdate(
            id, body
        );
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS");
    }
};



/**5  METODO = Elimina un registro!
 * @param {*} req
 *@param {*} res
 */

const deleteItem = async (req, res) => { };




module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
