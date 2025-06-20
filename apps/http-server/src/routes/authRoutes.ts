const express = require('express')
const router = express.Router()


router.post('/signup', (req:Request, res:Response)=> {
  // @ts-ignore
  res.send('Hello World!')
})

router.post('/signin',(req:Request, res:Response)=>{

})

module.exports = router