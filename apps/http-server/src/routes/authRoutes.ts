const express = require("express");
const router = express.Router();
import {signup} from '../controllers/AuthController'; 
import { signin } from "../controllers/AuthController";
import { Request, Response } from 'express';

router.post("/signup", signup);

router.post("/signin",signin);

router.post("/creategroup",(req:Request,res:Response)=>{
    

})



module.exports = router;
