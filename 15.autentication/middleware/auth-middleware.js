const jwt = require("jsonwebtoken")
const authMiddleware = (req,res,next)=>{
    console.log("auth middleware was called")

    const authHeadder = req.headers['authorization']
    console.log(authHeadder);
    const token = authHeadder && authHeadder.split(" ")[1]
    
    if(!token){
        return  res.status(401).json({
            success : false,
            message: 'acess denied no token provided'
        })
    }

    try{
        const decodedTokenInfo = jwt.verify(token,process.env.JWT_SECRET_KEY)
        console.log(decodedTokenInfo);

        req.userInfo = decodedTokenInfo;
        next();
        
        
    }catch(e){
        return res.status(500).json({
            success:false,
            message:"acess denied no token provided."
        })
    }
    next()
}

module.exports = authMiddleware