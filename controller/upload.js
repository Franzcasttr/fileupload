const {StatusCode} = require('http-status-codes')
const path = require('path')
const fs = require('fs')
const cloudnary = require('cloudinary').v2
const uploadimageproduct = async(req,res) =>{
    const productimage = req.files.image
    const imagepath = path.join(__dirname, '../public/uploads/'+`${productimage.name}`)
    productimage.mv(imagepath)
    return res.status(200).json({image:{src:productimage.name}})
    
}
const uploadimage = async(req,res)=>{
    //console.log(req.files.image)
const result = await cloudnary.uploader.upload(
req.files.image.tempFilePath,
{
    use_filename:true,
    folder:'file'
   
}
)
fs.unlinkSync(req.files.image.tempFilePath)
res.status(200).json({image:{src:result.secure_url}})//secure_url pag na console log mo yung result magpapakita

}

module.exports = {uploadimageproduct, uploadimage}