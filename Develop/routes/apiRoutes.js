const router = require("express").Router();
const fs = require("fs");
const uuid = require("uuid");

//get notes from DB
router.get('/', (req,res)=> {
    res.json(`Got ${req.method} Request`);
})

//add notes to DB
router.post('/', (req,res)=> {
    res.json(`Got ${req.method} Request`);
});

//Bonus - Be able to delete a note

module.exports = router;

