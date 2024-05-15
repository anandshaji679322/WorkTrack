import ErrorHandler from "../utils/ErrorHandler";

const ErrorMiddleware = (err: ErrorHandler, req: any, res: any, next: any) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    if (process.env.NODE_ENV === 'development') {
      res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
      });
    } else if (process.env.NODE_ENV === 'production') {
        let error = { ...err };
        error.message = err.message;

        if (error.name === 'CastError') error = handleCastErrorDB(error);
        if (error.statusCode === 11000) error = handleDuplicateFieldsDB(error);
        if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
        if (error.name === 'JsonWebTokenError') error = handleJWTError();
        if (error.name === 'TokenExpiredError') error = handleJWTError();

        res.status(error.statusCode).json({
            status: error.status,
            message: error.message
        });
    }
  }

function handleCastErrorDB(error: { statusCode: number; status: string; isOperational: boolean; name: string; message: string; stack?: string | undefined; }): { statusCode: number; status: string; isOperational: boolean; name: string; message: string; stack?: string | undefined; } {
    throw new Error("Function not implemented.");
}
function handleDuplicateFieldsDB(error: { statusCode: number; status: string; isOperational: boolean; name: string; message: string; stack?: string | undefined; }): { statusCode: number; status: string; isOperational: boolean; name: string; message: string; stack?: string | undefined; } {
    throw new Error("Function not implemented.");
}

function handleValidationErrorDB(error: { statusCode: number; status: string; isOperational: boolean; name: string; message: string; stack?: string | undefined; }): { statusCode: number; status: string; isOperational: boolean; name: string; message: string; stack?: string | undefined; } {
    throw new Error("Function not implemented.");
}

function handleJWTError(): { statusCode: number; status: string; isOperational: boolean; name: string; message: string; stack?: string | undefined; } {
    throw new Error("Function not implemented.");
}


export default ErrorMiddleware;