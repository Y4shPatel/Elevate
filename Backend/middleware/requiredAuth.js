const { StatusCodes } = require('http-status-codes');
const User = require ('../Models/user')
const jwt = require('jsonwebtoken')

const requireAuth  = async (req,res , next)=>{

    try{
    // read token off cookies
    const token = req.cookies.Authorization


    //decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    
    //check expiration
    if(Date.now()> decoded.exp) return res.sendStatus(StatusCodes.UNAUTHORIZED)

    
    //find user using decoded sub
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(StatusCodes.UNAUTHORIZED)

    //attach user to req
        req.user = user;


    next();
    }catch (err){
        return res.sendStatus(StatusCodes.UNAUTHORIZED)
    }
}
module.exports = requireAuth;