const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello browser");
});

app.listen(port, () =>{}); 

app.post('/login', (req, res) =>{
    if(req.body.userName == "gmoney"){
        res.send("Welcome!")
    } else {
        res.send("Who are you?");
    }
});