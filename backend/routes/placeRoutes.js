const express = require('express');
const router = express.Router();
const { getPlaces, getPlace, createPlace, updatePlace, deletePlace } = require('../controllers/placeController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getPlaces);
router.get('/:id', getPlace);
router.post('/', protect, createPlace);
router.put('/:id', protect, updatePlace);
router.delete('/:id', protect, deletePlace);

module.exports = router;
