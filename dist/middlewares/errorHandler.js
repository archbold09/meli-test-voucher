"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boomErrorHandler = exports.errorHandler = exports.logErrors = void 0;
function logErrors(error, _req, _res, next) {
    console.error(error);
    next(error);
}
exports.logErrors = logErrors;
function errorHandler(error, _req, res, _next) {
    return res.status(500).json({
        statusCode: 500,
        message: error.message,
        stack: error.stack
    });
}
exports.errorHandler = errorHandler;
function boomErrorHandler(error, _req, res, next) {
    if (error.isBoom) {
        const { output } = error;
        return res.status(output.statusCode).json(output.payload);
    }
    next(error);
}
exports.boomErrorHandler = boomErrorHandler;
