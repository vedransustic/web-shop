const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    const token = authHeader.split(" ")[1]
    if(authHeader){
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            err && res.status(403).json("Token is not valid!");
            req.user = user
            next()
        })
    }else{
        return res.status(401).json("You are not authenticated!")
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        (req.user._id === req.params.id || req.user.isAdmin) && next()
    })
    res.status(403).json("You are not allowed to do that!")
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        (req.user.isAdmin) && next()
    })
    res.status(403).json("You are not admin!")
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }