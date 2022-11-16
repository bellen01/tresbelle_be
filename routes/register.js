const routes = require('express').Router({});
require('dotenv').config();
// const { db } = require('../app');
const db = require('../firebase');
const { collection, query, where, orderBy, onSnapshot, getDoc, addDoc, getDocs } = require('firebase/firestore');
const bcrypt = require('bcrypt');

const userRef = collection(db, 'users');

const hashPassword = async (userPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    return hashedPassword;
}

routes.post('/', async (req, res) => {
    console.log(req.body);
    const emailToLowerCase = req.body.email.toLowerCase();
    const q = query(userRef, where("email", "==", emailToLowerCase));
    const doesUserExist = await getDocs(q);
    console.log(doesUserExist.docs)
    if (doesUserExist.docs.length !== 0) {
        console.log('Email is already registered');
        return res.status(406).json({});
    } else {
        const encryptedPwd = await hashPassword(req.body.password);
        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: emailToLowerCase,
            password: encryptedPwd
        }

        try {
            await addDoc(userRef, userData);
            return res.status(200).json({});
        } catch (error) {
            console.log('Något gick fel', error.message);
            res.status(401).json({ message: error.message });
        }
    }


})


module.exports = routes;