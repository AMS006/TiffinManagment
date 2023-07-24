const generateToken = (res,statusCode,user,isUser) =>{
    try{
        let token = ''
        let text = ''
        if(isUser){
            token = user.generateJwtToken(); // Generating token for user
            text = 'userToken'
        }else{
            token = user.generateJwtToken(); // Generating token for provider
            text = 'providerToken'
        }
        if(isUser)
        return res.status(statusCode).json({
            _id:user._id,
            name:user.name,
            phoneNumber:user?.phoneNumber,
            email:user.email,
            userToken:token
        })
        return res.status(statusCode).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            address:user?.address,
            phoneNumber:user?.phoneNumber,
            rating:user?.rating,
            isAuthorized:user.isAuthorized,
            providerToken:token
        })
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}
module.exports = generateToken