const mongoose = require('mongoose')
const joi = require('joi')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    price: {
        type: Number,
        required : true
    },
    description : {
        type: String,
        default : "Product Description"
    },
    rating: {
        type : Number,
        default : 0
    },
    quantity: {
        type: Number,
        required : true
    },
    image : {
        type : Array,
        required : true
    },
    model: {
        type: String,
        default : "Sluch"
    }
}, { timestamps : true })

const Product = mongoose.model("Product", ProductSchema)

const ProductValidate = (obj) => {
    const schema = joi.object({
        name: joi.string().required(),
        price: joi.number().required(),
        description: joi.string(),
        quantity : joi.number().required(),
        rating : joi.number(),
        model: joi.string(),
        category: joi.string(),
    })
    return schema.validate(obj);
}

module.exports = {Product, ProductValidate}