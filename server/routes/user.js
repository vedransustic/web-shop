const {verifyTokenAndAuthorization} = require("./verifyToken");
const User = require('../models/User')
const router = require("express").Router()
const CryptoJS = require("crypto-js")

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    }

    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updateUser)

    }catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router