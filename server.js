const express = require('express');
const fs = require ('fs');
const path = require('path');
const app = express()
const port = 3000;
const allNotes = require('express');
const allNotes = require('./db/db.json');

//To send html file
// res.sendFile(“public/index.html”)


app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

  app.get('/test', (req, res) => {
    res.send('This is a test')
  })

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
