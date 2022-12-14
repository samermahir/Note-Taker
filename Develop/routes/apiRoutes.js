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
    const id = uuid();
    const newNote = {
        title,
        text,
        id,
        
    };
    const savedData = fs.readFileSync('./db/db.json')
        
    const noteTaker = JSON.parse(savedData);
    noteTaker.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(noteTaker), 'utf-8', (err)=> {
        if (err) throw err;
        },
    res.json(savedData));
        });
    
 //Bonus - Be able to delete a note   
router.delete('/:id', (req, res)=> {
    console.info(`deleted ${req.method} request`);
    const deleteNote = fs.readFileSync('./db/db.json', )
    const oldData = JSON.parse(deleteNote)
    newNote = oldData.filter(function(note) {
        return note.id !== req.params.id;
    });

    const brandNewNote = JSON.stringify(newNote)
    fs.writeFile('./db/db.json', brandNewNote , 'utf-8', (err)=> {
        if (err) throw err;
        console.log('Note deleted')

    res.json();
    })
    
    
});





module.exports = router

