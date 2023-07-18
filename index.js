const express = require('express')
const bodyParser = require('body-parser')
const {connectDb} = require('./db')
const app = express()

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

connectDb();

app.listen('3000', () =>{
    console.log('Listnening');
})