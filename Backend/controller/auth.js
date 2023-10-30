const User = require('../Models/user')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {

    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
}

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(StatusCodes.BAD_REQUEST).send('provide proper credentials')
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(StatusCodes.UNAUTHORIZED).send('invalid credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password);
    
    if (!isPasswordCorrect) {
        return res.status(StatusCodes.UNAUTHORIZED).send('invalid credentials');

    }



    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
}



module.exports = {
    login, register
}
