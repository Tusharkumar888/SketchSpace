const express = require('express')
import { Request, Response } from 'express';
const app = express()
const port = 3000

app.post('/signup', (req:Request, res:Response) => {
  res.send('Hello World!')
})


app.post('/signin',(req:Request, res:Response)=>{

})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
