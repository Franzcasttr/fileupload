const express = require('express')
const { createProduct, getallproduct, deleteproduct} = require('../controller/products')
const {uploadimageproduct, uploadimage} = require('../controller/upload')
const router = express.Router()

router.route('/').post(createProduct).get(getallproduct)
router.route('/:id').delete(deleteproduct)
router.route('/uploads').post(uploadimage)

module.exports = router