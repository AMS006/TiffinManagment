const generateToken = (res,statusCode,user) =>{
    try{
    const token = user.generateJwtToken();
    const {name,email,role,_id} =  user
    const options = {
        expires : new Date(
            Date.now() + 5 * 24 * 60 * 60 * 1000
        ),
        httpOnly:true
    }
    res.cookie('token',token).json({user:{name,email,role,_id}, token})
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}
module.exports = generateToken