import ErrorHandler from "../utils/ErrorHandler";
declare const ErrorMiddleware: (err: ErrorHandler, req: any, res: any, next: any) => void;
export default ErrorMiddleware;
