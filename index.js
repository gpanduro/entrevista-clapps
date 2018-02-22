'use strict'

const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')

const Product = require('./models/product')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

app.get('/api/product',(req,red)=>{
    res.status(200).send({products:[]})
})

app.get('/api/product/:producId',(req,res)=>{

})

app.post('/api/product',(req,res)=>{
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.stock = req.body.stock

    product.save((err,productStored)=>{
        if(err) res.status(500).send({message:`Error al guardar la BD ${err}`})
        res.status(200).send({product: productStored})
    })
})

app.put('/api/product/:productId',(req,res)=>{

})

app.delete('/api/product/:productId',(req,res)=>{

})

mongoose.connect('mongodb://localhost:27017/shop',(err,res)=>{
    if (err){
        return console.log(`error al conectar a la BD: ${err}`)
    }
    console.log('conexion a la BD establecida...')
    app.listen(3000, ()=>{
        console.log('API REST corriendo en localhost:3000')
    })
})
