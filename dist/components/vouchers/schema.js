"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const array = joi_1.default.array();
const amount = joi_1.default.number().min(1);
const getProductsSchema = joi_1.default.object({
    item_ids: array.required(),
    amount: amount.required()
});
exports.getProductsSchema = getProductsSchema;
