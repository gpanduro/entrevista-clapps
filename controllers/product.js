'use strict'
const Product = require('./models/product')


const getProduct=(req,res)=>{
    let productId = req.params.productId
    
    Product.findById(productId,(err,product)=>{
        if(err) return res.status(500).send({message:  `error al realziar la peticion${err}`})
        if(!product) return res.status(404).send({message: 'el producto no existe'})

        res.status(200).send({product})
    })

}

const getProductSinStock=(req,res)=>{
    
    Product.find({stock:{$eq: 0}},(err,products)=>{
        if(err) return res.status(500).send({message: `error al realziar la peticion${err}`})
        if(!products) return res.status(404).send({message: 'no existen los productos'})
        res.status(200).send({products})
    })
}

const getProductConStockOrdenado=(req,res)=>{
    const sortCriteria = req.query.criteria;

    if(sortCriteria){
        Product.find({stock:{$gt: 0}}).sort({ stock: sortCriteria }).exec((err, products)=>{
            if(err) return res.status(500).send({message: `error al realizar la peticion${err}`})
            if(!products) return res.status(404).send({message: 'no existen los productos'})
            
            res.status(200).send({products});
        });
    }else {
        Product.find({stock:{$gt: 0}},(err,products)=>{
            if(err) return res.status(500).send({message: `error al realziar la peticion${err}`})
            if(!products) return res.status(404).send({message: 'no existen los productos'})
            res.status(200).send({products})
        });
    }
}

const updateProduct=(req,res)=>{
    let productId = req.params.productId
    let update = req.body
    
    Product.findByIdAndUpdate(productId,update,(err,producUpdated)=>{
        if(err) res.status(500).send({message:`Error al actualizar producto de la BD ${err}`})

        res.status(200).send({product: producUpdated})
    })
}

const updateStock=(req, res)=>{
    const  id = req.query.id;
    const increment = JSON.parse(req.query.increment);
    let modifyStock = null;

    increment ? modifyStock = 1 : modifyStock = -1;

    Product.update({_id: id}, {$inc: { stock: modifyStock }}, (err, producUpdated)=>{
        if(err) res.status(500).send({message:`Error al actualizar stock del producto de la BD ${err}`})

        res.status(200).send({product: producUpdated})
    })
}

const deleteProduct=(req,res)=>{
    let productId=req.params.productId 
    Product.findById(productId,(err,product)=>{
        if(err) res.status(500).send({message: `Error al borrar producto de la BD ${err}`})

        product.remove(err =>{
            if(err) res.status(500).send({message:`Error al borrar el producto de la BD ${err}`})
    
        })
        res.status(200).send({message:'el producto fue eliminado'})
    })

}

const saveProduct=(req,res)=>{
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.stock = req.body.stock

    product.save((err,productStored)=>{
        if(err) res.status(500).send({message:`Error al guardar la BD ${err}`})
        res.status(200).send({product: productStored})
    })

}

exports={
    getProduct,
    getProductSinStock,
    getProductConStockOrdenado,
    updateProduct,
    updateStock,
    deleteProduct,
    saveProduct
}