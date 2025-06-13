class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something wnet wrong",
        error = [].
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data = null
        this.message = message
        this.success = falsethis.errors = this.errors

        if(stack){
            this.stack = this.stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export{ApiError}