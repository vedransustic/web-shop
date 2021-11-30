const router = require("express").Router()
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");
const Cart = require('../models/Cart')


//CREATE

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)
    try{
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    }catch (e) {
        res.status(500).json(e)
    }
})

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try{
        const updateCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updateCart)

    }catch (e) {
        res.status(500).json(e)
    }
})

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted.")
    }catch(e){
        res.status(500).json(e)
    }
})

//GET USER CART
router.get("/find/:userId", async (req, res) => {
    try{
        const cart = await Cart.findOne({ userId: req.params.userId })
        res.status(200).json(cart)
    }catch(e){
        res.status(500).json(e)
    }
})

//GET ALL CARTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {

        const carts = await Cart.find()
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router