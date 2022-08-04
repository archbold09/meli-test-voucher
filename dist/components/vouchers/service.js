"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const index_1 = __importDefault(require("../../config/index"));
const boom_1 = __importDefault(require("@hapi/boom"));
const API = index_1.default.apiConfig.API_MERCADO_LIBRE;
const getProducts = async (itemsId) => {
    try {
        const stringIds = itemsId.join(',');
        const result = await (0, axios_1.default)({
            method: 'GET',
            url: `${API}/items?ids=${stringIds}`
        });
        if (result.status !== 200)
            throw boom_1.default.badRequest('Error al conectar con la API');
        return {
            status: true,
            data: result.data
                .map((item) => {
                if (item.code === 200) {
                    return {
                        item_id: item.body.id,
                        price: item.body.price
                    };
                }
            })
                .filter((item) => item !== undefined)
        };
    }
    catch (error) {
        return error;
    }
};
module.exports = { getProducts };
