const express = require('express')
require('dotenv').config()


const app = express()

const port = process.env.PORT
const LOGINUSERNAME =  process.env.LOGINNAMES
const USERNAME = process.env.NAMES

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!<h1/>`)
})

app.get('/home' , (req , res)=>{
    res.send(`<h1>Hello ${USERNAME}<h1/>`)
})

app.get('/login' , (req , res)=>{
    res.send(`<h1> Hello ${LOGINUSERNAME}<h1/>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})