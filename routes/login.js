const routes = require('express').Router({});
require('dotenv').config();
// const { db } = require('../app');
const db = require('../firebase');
const { collection, query, orderBy, onSnapshot, getDoc, addDoc } = require('firebase/firestore');

const userRef = collection(db, 'users');

const hashPassword = async (userPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    return hashedPassword;
}

const checkIfUserExist = async () => {

}

routes.post('/', async (req, res) => {



})


module.exports = routes;