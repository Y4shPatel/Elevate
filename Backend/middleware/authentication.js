const user = require('../Models/user')
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const auth = (req,res,next) => {
    //check header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(StatusCodes.UNAUTHORIZED).json('authentication invalid')
    }
    const token = authHeader.split(' ')[1]

    try { 
        const payload = jwt.verify(token , process.env.JWT_SECRET)
        //attac the user to the job routes
        req.user = {userId : payload.userId, name:payload.name}
        next()
    }catch(error){
        return res.status(StatusCodes.UNAUTHORIZED).json('authentication invalid')
    }
}

module.exports =  auth