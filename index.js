const express = require('express')
const listEndpoints = require('express-list-endpoints')
const bodyParser = require('body-parser')
const {connectDb} = require('./db')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

connectDb();
app.use(
    '/api',
    productRoutes,
    userRoutes
)
console.log(listEndpoints(app));

app.listen('3000', () =>{
    console.log('Listnening');
})