const firebaseConfig = require('./config');
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

console.log(firebaseConfig);
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

module.exports = db;