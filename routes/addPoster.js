const routes = require('express').Router({});
require('dotenv').config();
// const { db } = require('../app');
const db = require('../firebase');
const { collection, query, orderBy, onSnapshot, getDoc, addDoc } = require('firebase/firestore');

const colRef = collection(db, 'posters');


routes.post('/', (req, res) => {
    console.log('inne i post');
    console.log(req.body);
    if (req.body.title === false || req.body.title === null || req.body.title === undefined || req.body.title === '') {
        return res.status(412).json({});
    } else if (req.body.description === false || req.body.description === null || req.body.description === undefined || req.body.description === '') {
        return res.status(417).json({});
    } else if (req.body.sizeAndPrice === false || req.body.sizeAndPrice === null || req.body.sizeAndPrice === undefined || req.body.sizeAndPrice.length === 0) {
        return res.status(406).json({});
    } else {
        console.log('allt finns med');
        addDoc(colRef, req.body)
            .then((newPoster) => {
                console.log('nya posterns id', newPoster.id)
                return res.status(200).json({
                    id: newPoster.id
                });
            })
    }
    // if (poster) {
    //     addDoc(colRef, req.body)
    //         .then(() => {
    //             //svara med en res.status(200) tex, kanske skicka tillbaka id som jag kanske får tillbaka i .then?
    //         })
    // }
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