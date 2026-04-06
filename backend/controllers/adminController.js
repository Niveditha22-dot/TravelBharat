const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Please provide email and password' });
    const admin = await Admin.findOne({ email }).select('+password');
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });
    const isMatch = await admin.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ success: true, token: generateToken(admin._id), admin: { id: admin._id, name: admin.name, email: admin.email, role: admin.role } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMe = async (req, res) => {
  res.json({ success: true, data: req.admin });
};

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await Admin.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Admin already exists' });
    const admin = await Admin.create({ name, email, password });
    res.status(201).json({ success: true, token: generateToken(admin._id), admin: { id: admin._id, name: admin.name, email: admin.email } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { loginAdmin, getMe, registerAdmin };
