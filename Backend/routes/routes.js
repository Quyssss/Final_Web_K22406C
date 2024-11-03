const express = require('express');
const router = express.Router();
const userController = require('../src/user/userController');
// Đăng ký route cho tạo người dùng
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/login').post(userController.loginUserControllerFn);
module.exports = router;
