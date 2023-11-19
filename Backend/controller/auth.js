const User = require('../Models/user')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

const signup = async (req, res) => {
    // get the email , name and password
  try{  const {name , email , password} = req.body
 
    //hashing the password
    const hashedPassword = bcrypt.hashSync(password , 8);
   
    //creating the user
    const user = await User.create({name , email ,password : hashedPassword})

    res.sendStatus(StatusCodes.OK)}
    catch(err){
        console.log(err);
        res.sendStatus(StatusCodes.BAD_REQUEST)
    }
}

const login = async (req, res) => {
    //get the email and password
    try{const {email , password} = req.body;


    //find the user with requested email
   const user =  await User.findOne({email})
   if(!user) return res.sendStatus(StatusCodes.UNAUTHORIZED);


    //compare sent in password with found user password hash
    const passwordMatch =  bcrypt.compareSync(password , user.password);
    if(!passwordMatch) return res.sendStatus(StatusCodes.UNAUTHORIZED);

    //create a jwt token
    const exp =Date.now() + 1000 * 60 * 60 *24 * 30; //millisecond + 10000 => second
    const token = jwt.sign({sub : user._id , exp} , process.env.JWT_SECRET);

    //set the cookie
res.cookie("Authorization" , token , {
    expires : new Date(exp),
    httpOnly : true,
    sameSite : 'lax',
    secure: process.env.NODE_ENV === "production"
})



    //send jwt token
        res.sendStatus(200)
}catch(err){
    console.log(err)
    res.sendStatus(StatusCodes.BAD_REQUEST)
}
}

const logout = async (req,res)=>{
    try{
res.clearCookie("Authorization")
res.sendStatus(StatusCodes.OK)
    }catch(err){
        console.log(err)
        res.sendStatus(StatusCodes.BAD_REQUEST)
    }
}

const checkAuth =  (req,res)=>{
    try{
    // console.log(req.user)
    res.sendStatus(StatusCodes.OK)
    }
    catch(err){
        res.sendStatus(StatusCodes.BAD_REQUEST)
    }
}
module.exports = {
    login, signup , logout , checkAuth
}
