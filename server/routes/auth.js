const router = require("express").Router()
const User = require("../models/User")
const Cryptojs = require("crypto-js")

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Cryptojs.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    });

    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(e){

        res.status(500).json(e)
    }
})

router.get("/login", async (req, res) => {

})

module.exports = router