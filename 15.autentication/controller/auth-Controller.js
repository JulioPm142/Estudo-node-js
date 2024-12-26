const User = require('../models/User')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body
        const checkExistingUser = await User.findOne({ $or: [{ username }, { email }] })
        if (checkExistingUser) {
            return res.status(400).json({
                succes: false,
                message: 'theres is already a user with this email'
            })
        }

        //encriptando password
        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(password, salt)

        const NewUser = new User({
            username,
            email,
            password: hasedPassword,
            role: role || 'user'
        })

        await NewUser.save();

        if (NewUser) {
            res.status(201).json({
                success: true,
                message: 'user created successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                message: 'unable to register user'
            })
        }

    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: 'Some Error occured'
        })
    }
}


const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            })
        }

        //checando senha

        const isPasswordMatch = await bcrypt.compare(password, user.password)



        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: 'User not found or password incorrect'
            })
        }

        //criando o token
        const acessToken= jwt.sign({
            userId:user._id,
            username:user.username,
            role:user.role
        }, process.env.JWT_SECRET_KEY,{
            expiresIn:'15m'
        })

        res.status(200).json({
            success:true,
            message:'token generated',
            acessToken
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: 'Some Error occured'
        })
    }
}

module.exports = { loginUser, registerUser }