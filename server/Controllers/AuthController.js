const asyncHandler = require('express-async-handler')
const {User , UserValidate , UserUpdateValidate , UserLogin} = require('../Modules/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
/**
 * @method POST
 * @access public
 * @route /api/auth/register
 * @desc Register a new user
 */
const registerUser = asyncHandler(async (req , res) => {
    const { error } = UserValidate(req.body)
    if (error) {
        res.status(400).json({message : error.details[0].message})
    }
    const UserExist = User.findOne({ email: req.body.email })
    if (UserExist) res.status(400).json({ message : "Email is Current Exist"})
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    })
    await user.save()
    res.status(201)
        .json({message : "Register Successfully"})
})

/**
 * @method POST
 * @access public
 * @route /api/auth/login
 * @desc Login a user
 */
const LoginUser = asyncHandler(async (req, res) => {
    const { error } = UserLogin(req.body)
    if (error) {
        res.status(400).json({message : error.details[0].message})
    }
    const user = await User.findOne({ email: req.body.email })
    if (!user) res.status(400).json("Email or Password is Worng")
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) res.status(400).json("Email or Password is Worng")
    const token = jwt.sign({ _id: user._id , isAdmin: user.isAdmin }, process.env.TOKEN_SECRET);
    const { Password, ...others } = user._doc
    res.send({ ...others, token });        
})


/**
 * @method PUT
 * @access public
 * @route /api/auth/:id
 * @desc Upadate a user
 */

const UpdateUser = asyncHandler(async (req, res) => {
    const { error } = UserUpdateValidate(req.body)
    if (error) res.status(400).json({ message: error.details[0].message })
    const user = await User.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            profileName : req.body.profileName
        }
    }, { new: true })
    if (!user) res.status(404).json({ message: "User Not Found" })
    res.status(200).json({message : "User Updated Successfully"})
})

/**
 * @desc delete User
 * @route DELETE /api/auth/:id
 * @access public
 */

const DeleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(404).json({ message: "User Not Found" })
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({message : "User Deleted Successfully"})
})

/**
 * @method GET
 * @access public
 * @route /api/auth/:id
 * @desc Get a user
 */
const GetUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(404).json({ message: "User Not Found" })
    }
    res.status(200).json(user)
})  

/**
 * @method GET
 * @access public
 * @route /api/auth
 * @desc Get all user
 */

const getAllUser = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})  

module.exports = {registerUser , LoginUser , UpdateUser , DeleteUser , GetUser , getAllUser}