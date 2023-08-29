const express = require('express');
const router = express.Router();
const {
  registerUser,
  checkEmail,
  loginUser,
  getMe,
  updateUser,
  confirmOtp,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.get('/confirmation/:token', checkEmail);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.post('/me', protect, updateUser);
router.post('/otp/:token', confirmOtp);

module.exports = router;
