const express = require("express");
const router = express.Router();
import { CreateGroupShema } from '@repo/common/types';
import {createGroup, createMessage, signup} from '../controllers/AuthController'; 
import { signin } from "../controllers/AuthController";
import { Request, Response } from 'express';
import { client } from '@repo/db/config';
import { authMiddleWare } from '../middlewares/authmiddleware';

router.post("/signup", signup);

router.post("/signin",signin);

router.post("/creategroup",authMiddleWare,createGroup)

router.post("/sendmessage",authMiddleWare,createMessage)


module.exports = router;
