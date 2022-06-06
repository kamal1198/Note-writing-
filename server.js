const express = require('express');
const fs = require ('fs');
const path = require('path');
const app = express()
const port = 3000;
//To send html file
// res.sendFile(“public/index.html”)


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.get('/greeting', (req, res) => {
    res.send('Hello!')
  })
  app.get('/test', (req, res) => {
    res.send('This is a test')
  })

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
