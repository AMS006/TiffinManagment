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
    const options = {
        expires : new Date(
            Date.now() + 5 * 24 * 60 * 60 * 1000
        ),
        secure:false,
        httpOnly:true
    }
    if(text === "userToken")
       return res.status(statusCode).cookie(text,token, options).json({success:true, user})

       return res.status(statusCode).cookie(text,token, options).json({success:true, provider:user})
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}
module.exports = generateToken