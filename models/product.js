'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    stock: Number,
})

module.exports = mongoose.model('Product',ProductSchema)
