const express = require("express");
const {signup, signin, getUser, logout} = require('../controller/authController.js');
const authRouter = express.Router();
const {jwtAuth} = require("../middleware/jwtAuth.js")

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.get('/user', getUser)
authRouter.get('/logout',logout)

module.exports = authRouter;
