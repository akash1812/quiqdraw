import { NextFunction, Request, Response } from "express";
import jwt  from "jsonwebtoken";
import 'dotenv/config';

const jwtSecret = process.env.JWT_SECRET;

export function middleware(req:Request, res:Response, next:NextFunction) {
    const token = req.headers['authorization'] ?? "";

    const decoded = jwt.verify(token, jwtSecret as string);

    if(decoded){
        //@ts-ignore
        req.userId = decoded.userId;
        next();
    }else{
        res.status(403).json({
            message: "Unauthorized"
        })
    }
} 