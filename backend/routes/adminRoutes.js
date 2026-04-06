const express = require('express');
const router = express.Router();
const { loginAdmin, getMe, registerAdmin } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

router.post('/login', loginAdmin);
router.post('/register', registerAdmin);
router.get('/me', protect, getMe);

module.exports = router;
