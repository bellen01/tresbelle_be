const routes = require('express').Router({});
require('dotenv').config();
// const { db } = require('../app');
const db = require('../firebase');
const { collection, query, orderBy, onSnapshot, getDocs } = require('firebase/firestore');

const colRef = collection(db, 'posters');


// routes.get('/', (req, res) => {
//     getDocs(colRef)
//         .then((snapshot) => {
//             let posters = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 data: doc.data()
//             }))
//             console.log(posters);
//         })
//         .catch(err => {
//             console.log(err.message)
//         })
// })

getDocs(colRef)
    .then((snapshot) => {
        let posters = snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))
        console.log(posters);
    })


module.exports = routes;