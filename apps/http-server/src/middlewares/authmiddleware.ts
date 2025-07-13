import {Request,Response,NextFunction} from 'express';
var jwt = require('jsonwebtoken');

const JWTSECRET ="34f772d49767cf290f2301b8e9bc14dee872a2114c187461c620d57f141c1615"

 export const authMiddleWare = (req:Request,res:Response,next:NextFunction)=>{
const authHeader = req.headers.authorization
if(!authHeader){
    return res.json({
       mess:"require token"
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