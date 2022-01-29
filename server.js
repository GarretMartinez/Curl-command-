const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello browser");
});

app.listen(port, () =>{}); 

app.post('/login', (req, res) =>{
    if(req.body.userName == "gmoney" && md5(req.body.password) == "fc4d477402d75c8cf7c37e07d68ada9c"){
        res.send("Welcome!")
    } else {
        res.send("Who are you?");
    }
});