const express = require('express')
const router = express.Router()
const {
    getProduct, 
    addProduct, 
    updateProduct, 
    deleteProduct
} = require('../controllers/products')

// importamos nuestros productos
router.route('/')
    .get(getProduct)
    .post(addProduct)
router.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct)
module.exports = router