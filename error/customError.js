class CustomError extends Error{
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

//second option lang to
const createcustomrror = (msg, statusCode) =>{
return new CustomError(msg, statusCode)
}

module.exports = {CustomError, createcustomrror}