const router = require("express").Router();
const fs = require("fs");
const uuid = require("../helpers/uuid.js");

//get notes from DB
router.get('/', (req,res)=> {
    console.log(`Received ${req.method} request`);
    const notesData = fs.readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(notesData));
})

//add notes to DB
router.post('/', (req,res)=> {
    console.log(`Got ${req.method} Request`);
    const {title, text} = req.body;
    if (title && text) {
    }
    const newNote = {
        title,
        text,
        id: uuid(),
        
    };
    const savedData = fs.readFileSync('./db/db.json')
        
    const noteTaker = JSON.parse(savedData);
    noteTaker.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(noteTaker), 'utf-8', (err)=> {
        if (err) throw err;
        console.log(`Saved ${noteTaker.length} notes`);
    res.json(savedData);
        });
    
 //Bonus - Be able to delete a note   
router.delete('/notes/:id', (req, res)=> {
    console.log(`Received ${req.method} request`);
    const savedData = fs.readFileSync('./db/db.json', 'utf-8')
    const deleteNote = req.params.id;
    const oldNote = JSON.parse(savedData)
    const newNote = oldNote.filter(note => note.id!== deleteNote);
    fs.writeFile('./db/db.json', JSON.stringify(newNote), 'utf-8', (err)=> {
        if (err) throw err;
        console.log('Note deleted')

    res.json();
    })
    
    
});

})



module.exports = router

