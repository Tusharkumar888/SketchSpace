const express = require('express')
const router = express.Router()
import {CreateUserShema,VerifyUserShema} from "@repo/common/types"

router.post('/signup', (req:Request, res:Response)=> {
  const user = CreateUserShema.safeParse(req.body)
  if(!user.success){
    // @ts-ignore
    return res.json({
      message:"incorrect inputs"
    })
    
    
    
  } 

})

router.post('/signin',(req:Request, res:Response)=>{
  const user = VerifyUserShema.safeParse(req.body)
  if(!user.success){
    // @ts-ignore
    return res.json({
      message:"incorrect inputs"
    })
    
    
    
  } 
})

module.exports = router