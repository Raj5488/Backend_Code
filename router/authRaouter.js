const express = require("express");
const {signup} = require('../controller/authController.js');
const authRouter = express.Router();

authRouter.post('/sign', signup);

module.exports = authRouter;