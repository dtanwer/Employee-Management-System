exports.checkEmailFormat=(req,res,next)=>{
    const {email}=req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail=emailRegex.test(email);
    if(!isValidEmail){
        return res.status(400).json({status:"error",message:"Invalid email format"});
    }
    next();
}