const express = require('express');
const router = express.Router();
const { getStates, getState, createState, updateState, deleteState } = require('../controllers/stateController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getStates);
router.get('/:id', getState);
router.post('/', protect, createState);
router.put('/:id', protect, updateState);
router.delete('/:id', protect, deleteState);

module.exports = router;
