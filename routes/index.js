'use strict'

const express = require('express')
const ProductCrtl= require('../controllers/product')
const api=express.Router()

api.get('/product/:productId',ProductCrtl.getProduct)
api.post('/product',ProductCrtl.saveProduct)
api.put('/product/:productId',ProductCrtl.updateProduct)
api.put('/product',ProductCrtl.updateStock)
api.delete('/product/:productId',ProductCrtl.deleteProduct)
api.get('/products/sinstock',ProductCrtl.getProductSinStock)
api.get('/products',ProductCrtl.getProductConStockOrdenado)

module.exports=api