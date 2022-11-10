const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
// const firebaseConfig = require('./config');
// const { initializeApp } = require('firebase/app');
// const { getFirestore } = require('firebase/firestore');

// console.log(firebaseConfig);
// const firebase = initializeApp(firebaseConfig);
// const db = getFirestore(firebase);

const postersRoute = require('./routes/posters.js');
const addPosterRoute = require('./routes/addPoster.js');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', postersRoute);
app.use('/admin/addposter', addPosterRoute);

app.get('/', async (req, res) => {
    res.json({
        title: "title",
        body: "body"
    })
})


module.exports = app;