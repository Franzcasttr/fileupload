const { CustomError } = require("../error/customError")

const errorhandler = (err,req,res,next) =>{
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:'Something went wrong'})
}

module.exports = errorhandler