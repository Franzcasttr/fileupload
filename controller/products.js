const { CustomError } = require("../error/customError")
const path = require('path')
const product = require("../models/product")
const asyncwrapper = require("../middleware/asyncwrapper")
const { log } = require("console")

const createProduct = async(req,res) =>{
const Product = await product.create(req.body)
res.status(201).json({Product})
}

const getallproduct = async(req,res) =>{
    const get_all = await product.find({})
    res.status(200).json({get_all})
}

const deleteproduct = asyncwrapper(async(req,res)=>{
const {id:taskID} = req.params
const Product = await product.findOneAndDelete({_id: taskID})
if(!Product){
    res.status(200).json({msg:`No task with ID of ${taskID}`})
}
res.status(200).json({Product})



})
module.exports = {createProduct, getallproduct, deleteproduct}