const routes = require('express').Router({});
require('dotenv').config();
// const { db } = require('../app');
const db = require('../firebase');
const { collection, query, orderBy, onSnapshot, getDocs } = require('firebase/firestore');

const colRef = collection(db, 'posters');


routes.get('/', async (req, res) => {
    console.log('inne i getPosters')
    const snapshot = await getDocs(colRef);
    let posters = snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
    }));
    console.log(posters);
    res.send(posters);
})

// routes.get('/', (req, res) => {
//     console.log('inne i getPosters')
//     getDocs(colRef)
//         .then((snapshot) => {
//             let posters = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 data: doc.data()
//             }))
//             console.log(posters);
//             return 
//         })
// })

// getDocs(colRef)
//     .then((snapshot) => {
//         let posters = snapshot.docs.map(doc => ({
//             id: doc.id,
//             data: doc.data()
//         }))
//         console.log(posters);
//     })


module.exports = routes;