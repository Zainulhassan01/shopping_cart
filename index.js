const express = require('express')
const bodyParser = require('body-parser')
const {connectDb} = require('./db')
const productRoutes = require('./routes/productRoutes')
const app = express()

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

connectDb();
app.use(
    '/api',
    productRoutes
)

app.listen('3000', () =>{
    console.log('Listnening');
})