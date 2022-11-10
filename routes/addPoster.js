const routes = require('express').Router({});
require('dotenv').config();
// const { db } = require('../app');
const db = require('../firebase');
const { collection, query, orderBy, onSnapshot, getDoc, addDoc } = require('firebase/firestore');

const colRef = collection(db, 'posters');


routes.post('/admin/addposter', (req, res) => {

    if (poster) {
        addDoc(colRef, req.body)
            .then(() => {
                //svara med en res.status(200) tex, kanske skicka tillbaka id som jag kanske får tillbaka i .then?
            })
    }
})

// routes.post('/admin/addposter', (req, res) => {

//     if (poster) {
//         addDoc(colRef, {
//             title: req.body.title,
//             description: req.body.description,
//             sizeAndPrice: [
//                 {
//                     size: req.body.size,
//                     price: req.body.price
//                 },
//                 {
//                     size: req.body.size,
//                     price: req.body.price
//                 }
//             ]
//         })
//             .then(() => {

//             })
//     }
// })

module.exports = routes;