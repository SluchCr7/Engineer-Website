const { registerUser, LoginUser, UpdateUser, DeleteUser, GetUser , getAllUser } = require('../Controllers/AuthController')
const route = require('express').Router()


route.route('/register')
    .post(registerUser) 
route.route('/login')
    .post(LoginUser)
route.route('/:id')
    .put(UpdateUser)
    .delete(DeleteUser)
    .get(GetUser)
route.route("/")
    .get(getAllUser)
module.exports = route