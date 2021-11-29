const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    });

    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(e){

        res.status(500).json(e)
    }
})

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json("Wrong credentials. Try again.")
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET)
        const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        userPassword !== req.body.password && res.status(401).json("Wrong password. Try again.")

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        },
            process.env.JWT_SECRET,
            {expiresIn: "3d"})

        const {password, ...other} = user._doc

        res.status(200).json({...other, accessToken})

    }catch(e){
        res.status(500).json(e)
    }
})

module.exports = router