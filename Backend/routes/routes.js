const express = require('express');
const router = express.Router();
const userController = require('../src/user/userController');

// Đăng ký route cho tạo người dùng
router.route('/user/create').post(userController.createUserControllerFn);

// Đăng ký route cho tìm một người dùng
router.route('/user/findOne').get(userController.findOneUserController);

module.exports = router;
