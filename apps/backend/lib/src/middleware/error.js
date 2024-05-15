"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV === 'development') {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        });
    }
    else if (process.env.NODE_ENV === 'production') {
        let error = { ...err };
        error.message = err.message;
        if (error.name === 'CastError')
            error = handleCastErrorDB(error);
        if (error.statusCode === 11000)
            error = handleDuplicateFieldsDB(error);
        if (error.name === 'ValidationError')
            error = handleValidationErrorDB(error);
        if (error.name === 'JsonWebTokenError')
            error = handleJWTError();
        if (error.name === 'TokenExpiredError')
            error = handleJWTError();
        res.status(error.statusCode).json({
            status: error.status,
            message: error.message
        });
    }
};
function handleCastErrorDB(error) {
    throw new Error("Function not implemented.");
}
function handleDuplicateFieldsDB(error) {
    throw new Error("Function not implemented.");
}
function handleValidationErrorDB(error) {
    throw new Error("Function not implemented.");
}
function handleJWTError() {
    throw new Error("Function not implemented.");
}
exports.default = ErrorMiddleware;
