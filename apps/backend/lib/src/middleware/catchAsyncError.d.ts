/// <reference types="node" />
import { NextFunction } from "express";
export default function catchAsyncError(fn: any): (req: Request, res: Response, next: NextFunction) => Promise<any>;
