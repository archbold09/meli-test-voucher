"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./config/index"));
const routes_1 = __importDefault(require("./components/routes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
app.use(errorHandler_1.logErrors);
app.use(errorHandler_1.boomErrorHandler);
app.use(errorHandler_1.errorHandler);
const server = app.listen(index_1.default.mainConfig.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${index_1.default.mainConfig.PORT}`);
});
exports.default = server;
