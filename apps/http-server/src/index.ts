const express = require('express')
import { Request, Response } from 'express';
const app = express()
const port = 3000
const authRoutes = require('./routes/authRoutes')
app.use('/v1/auth',authRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
