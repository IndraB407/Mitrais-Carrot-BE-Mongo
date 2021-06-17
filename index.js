const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/ItemCarrot",{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).json("indra's server is running well");
})
app.use('/api',require('./routers/users'));

app.listen(process.env.port || 8080,(req,res)=>{
    console.log("indra's server is running well");
})