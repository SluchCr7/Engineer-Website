const asyncHandler = require('express-async-handler')
const {Product , ProductValidate} = require('../Modules/Product')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {v2} = require('cloudinary')
const path = require('path')
const { cloudRemove , cloudUpload } = require('../config/cloudUpload')
const fs = require('fs')
/**
 * @method POST
 * @access public
 * @route /api/product
 * @desc Create New Product
 */

const NewProduct = async (req, res) => { 
    try {
        const { name, description , price , rating , quantity , model , category } = req.body
        const image = req.files.image
        const result = await v2.uploader.upload(image[0].path , {resource_type : "image"})
        const product = new Product({
            name, description , price , rating , quantity , model , category,
            image: {
                url: result.secure_url,
                publicId: result.public_id
            }
        })
        await product.save()
        res.status(201).json(product)
        fs.unlinkSync(image[0].path)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


/**
 * @method GET
 * @access public
 * @route /api/product
 * @desc ALL Product
 */

const getAllProduct = asyncHandler(async(req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
})

/**
 * @method GET
 * @access public
 * @route /api/product/:id
 * @desc get product by id
 */

const getProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(404).json({ message: "Product Not Found" })
    }
    res.status(200).json(product)
})

/**
 * @method DELETE
 * @access public
 * @route /api/product/:id
 * @desc delete Product
 */

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(404).json({ message: "Product Not Found" })
    }
    await Product.findByIdAndDelete(req.params.id)
})

// /**
//  * @method UPDATE
//  * @access public
//  * @route /api/product/:id
//  * @desc Update Product
//  */

// const UpdateProduct = asyncHandler(async (req, res) => {
//     const { error } = ProductValidate(req.body)
//     if (error) {
//         res.status(400).json({message : error.details[0].message})
//     }
//     const product = await Product.findByIdAndUpdate(req.params.id, {
//         $set: {
//             name: req.body.name,
            
//         }
//     }, { new: true })
//     if (!product) {
//         return res.status(404).json({ message: "Product Not Found" })
//     }
//     res.status(200).json({message : "Product Updated Successfully"})
// })

module.exports = {getAllProduct , getProduct , deleteProduct  , NewProduct}