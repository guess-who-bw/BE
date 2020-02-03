const jwt = require("jsonwebtoken");

const { jwtSecret } = require("./secret.js");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({message: "Authentification required."})
            } else {
                req.user = decodedToken.user;
                next();
            }
        })
    } else {
        res.status(401).json({message: "You shall not pass! There is no token!"})
    }
}
