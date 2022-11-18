const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const postersRoute = require('./routes/posters.js');
const addPosterRoute = require('./routes/addPoster.js');
const loginRoute = require('./routes/login.js')
const registerRoute = require('./routes/register.js')
const productDetailsRoute = require('./routes/productDetails.js')


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', postersRoute);
app.use('/addposter', addPosterRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/product', productDetailsRoute);

app.get('/', async (req, res) => {
    res.json({
        title: "title",
        body: "body"
    })
})


module.exports = app;