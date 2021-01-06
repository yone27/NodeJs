const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const productRoutes = require('./routes/products')


// settings
app.set('json spaces', 4)

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// routes
app.use('/products',productRoutes)

// static files

    
// start the server
app.listen(4000, () => {
    console.log('App listening on port 4000!');
});