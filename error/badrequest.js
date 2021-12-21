const { statusCode, StatusCodes } = require("http-status-codes");
const { CustomError } = require("./customError");


class badrequest extends CustomError {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = badrequest