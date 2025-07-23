import {Request,Response,NextFunction} from 'express';
var jwt = require('jsonwebtoken');
import dotenv from 'dotenv';
dotenv.config();
const JWTSECRET = process.env.JWTSECRET

export const authMiddleWare = (req:Request,res:Response,next:NextFunction)=>{
const authHeader = req.headers.authorization
if(!authHeader){
    return res.json({
       mess:"please sign in"
    })
}
const token = authHeader?.split(" ")?.[1]
const verifiedtoken = jwt.verify(token, JWTSECRET);


//rewrite the logic to validate it
if(!verifiedtoken){
    return res.json({mess:"invalid creadantials"})
}

next()

}