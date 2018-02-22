'use strict'

const express = require ('express')
const bodyParser = require ('body-parser')

const app = express()
const ProductCrtl=require('./controllers/product')

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

app.get('/api/product/:productId',ProductCrtl.getProduct)
app.post('/api/product',ProductCrtl.saveProduct)
app.put('/api/product/:productId',ProductCrtl.updateProduct)
app.put('/api/product',ProductCrtl.updateStock)
app.delete('/api/product/:productId',ProductCrtl.deleteProduct)
app.get('/api/products/sinstock',ProductCrtl.getProductSinStock)
app.get('/api/products',ProductCrtl.getProductConStockOrdenado)

module.exports = app