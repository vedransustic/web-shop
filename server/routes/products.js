const router = require("express").Router()
const {verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");
const Products = require('../models/Products')


//CREATE

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
    const newProduct = new Products(req.body)

    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch (e) {
        res.status(500).json(e)
    }
})

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try{
        const updateProduct = await Products.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updateProduct)

    }catch (e) {
        res.status(500).json(e)
    }
})

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Products.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted.")
    }catch(e){
        res.status(500).json(e)
    }
})

//GET PRODUCT
router.get("/:id", async (req, res) => {
    try{
        const product = await Products.findById(req.params.id)
        res.status(200).json(product)
    }catch(e){
        res.status(500).json(e)
    }
})

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products

        if(qNew){
            products = await Products.find().sort({createdAt: 1}).limit(5)
        }
        else if(qCategory){
            products = await Products.find({
                categories: {
                    $in: [qCategory]
                }
            })
        }
        else{
            products = await Products.find()
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router