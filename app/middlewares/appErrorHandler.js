const response = require('./../libs/responseLib');

let errorHandler=(err,req,res,next)=>{
    console.log("application error handler middleware called");
    console.log(err);
    let apiResponse=response.generate(true,"Some error occured at global",500,null);
    res.send(apiResponse);
}

let notFoundHandler=(req,res,next)=>{
    console.log("Global not found handler middleware called");
    let apiResponse=response.generate(true,"Route not found in the application",404,null);
    res.status(404).send(apiResponse);
}
module.exports={
    globalErrorHandler:errorHandler,
    globalNotFoundHandler:notFoundHandler
}