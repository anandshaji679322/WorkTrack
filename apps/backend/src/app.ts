import express, { NextFunction, Request, Response } from 'express';
const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ErrorMiddleware from './middleware/error';

app.use(express.json({limit: '50mb'}));

app.use(cookieParser());

app.use(cors({
    origin: process.env.ORIGIN_URLS?.split(','),
}));



app.get('/test/api', (req: Request, res: Response) => {
    res.status(200).json({ 
        success: true,  
        message: 'Hello from Express Backend!' 
    });
});

app.all('*', (req: Request, res: Response , next: NextFunction) => {
    const err: any = new Error(`Can't find ${req.originalUrl} on this server!`);
    err.statusCode = 404;
    next(err);
});

app.use(ErrorMiddleware);

export default app;