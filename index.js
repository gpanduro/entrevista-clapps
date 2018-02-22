'use strict'

const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

const ProductCrtl=require('./controllers')

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

//GET
app.get('/api/product/:productId',ProductCrtl.getProduct)

//POST
app.post('/api/product',ProductCrtl.saveProduct)

//PUT
app.put('/api/product/:productId',ProductCrtl.updateProduct)

//PUT
app.put('/api/product',ProductCrtl.updateStock)

//DELETE
app.delete('/api/product/:productId',ProductCrtl.deleteProduct)

//GET
app.get('/api/products/sinstock',ProductCrtl.getProductSinStock)

//GET
app.get('/api/products',ProductCrtl.getProductConStockOrdenado)

mongoose.connect('mongodb://localhost:27017/shop',(err,res)=>{
    if (err){
        return console.log(`error al conectar a la BD: ${err}`)
    }
    console.log('conexion a la BD establecida...')
    app.listen(3000, ()=>{
        console.log('API REST corriendo en localhost:3000')
    })
})
