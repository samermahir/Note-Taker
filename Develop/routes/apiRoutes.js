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
router.post('/api/notes', (req,res)=> {
    console.log(`Got ${req.method} Request`);
    const {title, text} = req.body;
    if (title && text) {
    }
    const newNote = {
        title,
        text,
        id: uuid(),
        
    };
    const savedData = fs.readFileSync('./db/db.json', 'utf8' (err,)); {
        if (err) {
        console.log(err);
        }else{
    const noteTaker = JSON.parse(savedData);
    noteTaker.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(noteTaker),
    );
    res.json();
        }
    }
    

    
});

//Bonus - Be able to delete a note

module.exports = router;

