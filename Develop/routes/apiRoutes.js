const router = require("express").Router();
const fs = require("fs");
const uuid = require("../helpers/uuid.js");

//get notes from DB
router.get('/', (req,res)=> {
    const notesData = fs.readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(notesData));
})

//add notes to DB
router.post('/', (req,res)=> {
    fs.readFile('./db/db.json', 'utf8')
    const currentNotes = []
    const newNote = {
        tltle: req.body.title,
        text: req.body.text,
        id: uuid(),
    };
    fs.readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(currentNotes));
    currentNotes.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(newNote), 'utf8');

    console.log(`Got ${req.method} Request`);
});

//Bonus - Be able to delete a note

module.exports = router;

