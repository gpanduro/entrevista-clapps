'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    stock: Number,
})

mongoose.model('Product',ProductSchema)
