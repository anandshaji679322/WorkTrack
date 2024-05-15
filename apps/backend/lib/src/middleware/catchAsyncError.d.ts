/// <reference types="cookie-parser" />
import { NextFunction, Request, Response } from "express";
export default function catchAsyncError(fn: any): (req: Request, res: Response, next: NextFunction) => Promise<any>;
