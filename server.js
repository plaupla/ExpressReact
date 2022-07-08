//set up restful api

//start from udemy
const express =require("express");

//add from rob
const bodyParser = require('body-parser');

//initiate express to serve out endpoints
const app = express();

//to call file later using node
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes.js')(app, fs);

//run this code when you get request 
// app.use( (req,res) => {
//     console.log("Request")
//     res.send({color:'red'})
// })
//try to get the static file in express https://stackoverflow.com/questions/33113125/save-a-json-file-to-server-in-express-node

//this method of calling json files doesn't work
// const posesfile = require("/Users/ulfaoctaviani/Documents/QMUL/Stage2/Testing/expressreact/public/pose.json ");

// app.get('/json', (req,res) => {
//     res.json(posesfile);
// })


//responds only a string not a link. testing get from udemy
// app.get('/poses', (req,res) => {
//     res.send('https://www.kineticmeditation.uoctaviani.com')
// })

// app.get('/pose',(req,res) => {
//     res.send('give the pose')
// })

//request something
// app.listen(3000, () =>  {
//     console.log("listening on port 3000!")
// })
const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});



