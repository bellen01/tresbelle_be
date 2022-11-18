const routes = require('express').Router({});
require('dotenv').config();
// const { db } = require('../app');
const db = require('../firebase');
const { collection, query, where, orderBy, onSnapshot, getDoc, addDoc, getDocs } = require('firebase/firestore');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const userRef = collection(db, 'users');

//jwt stuff
// const secret = process.env.ACCESS_TOKEN;


routes.post('/', async (req, res) => {
    const emailToLowerCase = req.body.email.toLowerCase();
    const q = query(userRef, where("email", "==", emailToLowerCase));
    const doesUserExist = await getDocs(q);
    // console.log(doesUserExist.docs[0]);
    console.log(doesUserExist.docs[0].data().password);
    // const q = query(userRef, where("email", "==", emailToLowerCase), where("password", "==", encryptedPwd));
    if (doesUserExist.docs.length !== 0) {
        // const encryptedPwd = await bcrypt.compare(req.body.password, doesUserExist.docs.data.password);
        const encryptedPwd = await bcrypt.compare(req.body.password, doesUserExist.docs[0].data().password);
        if (encryptedPwd) {
            console.log('Inloggning lyckades');
            //jwt stuff
            // const id = doesUserExist.docs[0].data().id;
            // const token = jwt.sign({ id }, secret, {
            //     expiresIn: 300,
            // })

            return res.status(200).json({
                firstName: doesUserExist.docs[0].data().firstName,
                id: doesUserExist.docs[0].data().id,
                // auth: true, //jwt stuff
                // token: token //jwt stuff
            });
        }
    }
    console.log('Fel information');
    return res.status(401).json({
        // auth: false //jwt stuff
    });
})


module.exports = routes;