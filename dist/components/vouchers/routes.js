"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const validatorHandler_1 = __importDefault(require("../../middlewares/validatorHandler"));
const schema_1 = require("./schema");
const router = express_1.default.Router();
router.post('/', (0, validatorHandler_1.default)(schema_1.getProductsSchema, 'body'), async (req, res, next) => {
    try {
        const { item_ids, amount } = req.body;
        const result = await controller_1.default.getItemsWithVoucher(item_ids, amount);
        return res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
