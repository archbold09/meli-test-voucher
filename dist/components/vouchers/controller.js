"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = __importDefault(require("@hapi/boom"));
class Vouchers {
    async getItemsWithVoucher(items, amount) {
        const { getProducts } = require('./service');
        const resultProducts = await getProducts(items);
        if (!resultProducts.status)
            throw new Error('Error al obtener los datos de la API.');
        let totalToPay = 0;
        const result = [...new Set(resultProducts.data.map((item) => item.item_id))]
            .map((item) => {
            const product = resultProducts.data.findIndex((product) => product.item_id === item);
            if (product) {
                if (totalToPay < amount) {
                    totalToPay += resultProducts.data[product].price;
                    if (totalToPay > amount) {
                        totalToPay -= resultProducts.data[product].price;
                    }
                    else {
                        return item;
                    }
                }
            }
        })
            .filter((item) => item !== undefined);
        if (result.length === 0)
            throw boom_1.default.notFound('Producto no encontrado');
        return {
            message: 'Productos descontados.',
            status: true,
            data: { item_ids: result, total: totalToPay }
        };
    }
}
exports.default = new Vouchers();
