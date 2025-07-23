const express = require('express')
import dotenv from "dotenv";
dotenv.config();
const app = express()
const port = process.env.PORT
app.use(express.json())
const authRoutes = require('./routes/authRoutes')
app.use('/v1/auth',authRoutes)



app.listen(port, () => {
  console.log(`http-server is running`)
})
