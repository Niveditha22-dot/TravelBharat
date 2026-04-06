const express = require('express');
const router = express.Router();
const { getCities, getCity, createCity, updateCity, deleteCity } = require('../controllers/cityController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getCities);
router.get('/:id', getCity);
router.post('/', protect, createCity);
router.put('/:id', protect, updateCity);
router.delete('/:id', protect, deleteCity);

module.exports = router;
