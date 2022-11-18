const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({});
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN, (error) => {
            if (error) {
                return res.status(403).json({});
            } else {
                req.user = user;
                next();
            }
        })
    }
}