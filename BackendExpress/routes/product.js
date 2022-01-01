const express = require('express');
const router = express.Router();

const {getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct} = require('../controllers/productcontroller');

//get all products
router.route('/products').get(getProducts);

//get single product
router.route('/product/:id').get(getSingleProduct);

//get new product
router.route('/admin/product/new').post(newProduct);

//update product
router.route('/admin/product/:id').put(updateProduct);

//delete product
router.route('/admin/product/:id').delete(deleteProduct);



module.exports = router;
