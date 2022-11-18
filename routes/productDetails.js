const routes = require('express').Router({});
require('dotenv').config();
// const { db } = require('../app');
const db = require('../firebase');
const { collection, query, orderBy, onSnapshot, getDocs, doc, getDoc } = require('firebase/firestore');

const colRef = collection(db, 'posters');


routes.get('/:id', async (req, res) => {
    console.log('inne i GET productDetails')
    const id = req.params.id;
    console.log(id);
    const docRef = doc(db, 'posters', id);
    const product = await getDoc(docRef);
    if (product.exists()) {
        let poster = {
            id: product.id,
            data: product.data()
        }
        console.log(poster);
        console.log('product details:', product.data());
        res.send(poster);
    } else {
        console.log('något gick fel');
    }
    // let posters = snapshot.docs.map(doc => ({
    //     id: doc.id,
    //     data: doc.data()
    // }));
    // console.log(posters);
    // res.send(posters);
})


module.exports = routes;