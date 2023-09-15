const jwt=require('jsonwebtoken');
exports.verifyToken=(req,res,next)=>{
    // const token= req.headers.authorization;
    const token=req.cookies.access_token;
    if(token)
    {
          jwt.verify(token,process.env.JWT_SECRET,(err)=>{
                if(err) return res.status(403).json({message:"Invalid token"});
                next();
          });
    }
    else{
          res.sendStatus(401);
    }
}