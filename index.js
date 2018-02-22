'use strict'

const mongoose = require('mongoose')
const app=require('./app')
const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/shop',(err,res)=>{
    if (err){
        return console.log(`error al conectar a la BD: ${err}`)
    }
    console.log('conexion a la BD establecida...')
    app.listen(3000, ()=>{
        console.log('API REST corriendo en localhost:3000')
    })
})
