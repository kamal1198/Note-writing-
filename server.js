const express = require('express');
const fs = require ('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3005;

const util = require ('util')
const readfiles = util.promisify(fs.readFile)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//file 
app.use(express.static('public'));
function getnotes(){
    return readfiles('db/db.json','utf-8').then(notes => {
       let allNotes;
        try {
           allNotes = [].concat(JSON.parse(notes))
        } catch (error) {
            allNotes = []
        }
        return allNotes
    })
}
//adding files 
app.get('/api/notes',async (req, res) => {
    let allNotes = await getnotes()
    res.json(allNotes)
});
app.post('/api/notes', async (req, res) => {
    let allNotes = await getnotes();
   let newnotes = allNotes.concat(req.body)
    fs.writeFileSync('db/db.json',JSON.stringify(newnotes));
    res.json({
        msg:"okay"
    })
})
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


//api
// app.delete('/api/notes/:id', (req, res) => {
//     deleteNote(req.params.id, allNotes);
//     res.json(true);
// });

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
  })
