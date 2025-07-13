const express = require("express");
const router = express.Router();
import { CreateGroupShema } from '@repo/common/types';
import {signup} from '../controllers/AuthController'; 
import { signin } from "../controllers/AuthController";
import { Request, Response } from 'express';
import { client } from '@repo/db/config';
import { authMiddleWare } from '../middlewares/authmiddleware';

router.post("/signup", signup);

router.post("/signin",signin);

router.post("/creategroup",authMiddleWare,async(req:Request,res:Response)=>{
    const parseGrop = CreateGroupShema.safeParse(req.body);
     
    if(!parseGrop.success){
        return res.json({
            mess:"invalid cradantials"
        })
    }

   const foundUser=await client.users.findFirst({
    where: { id: parseGrop.data.adminId },
  })
     const foundgroup=await client.grop.findFirst({
    where: { slug: parseGrop.data.slug},
  })

  if(!foundUser){
    return res.json({
        mess: "no user with this id"
    })
  }
    if(foundgroup){
    return res.json({
        mess: "can't create a slug with same name"
    })
  }

  const createdGroup = await client.grop.create({
    data:{
        adminId:parseGrop.data.adminId,
        slug:parseGrop.data.slug
    }
  })

    if(!createdGroup){
    return res.json({
        mess: "unable to create user"
    })
  }
  return res.json({mess:"group created sucess"})

})



module.exports = router;
