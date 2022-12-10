const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes')
const app = express();
const PORT = process.env.PORT || 3001;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api/notes",apiRoutes);

app.get('/notes', (req,res)=> {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})


app.listen(PORT, ()=> console.log(`app is running at http://localhost:${PORT}`))