const Place = require('../models/Place');

const getPlaces = async (req, res) => {
  try {
    const filter = { status: 'live' };
    if (req.query.state) filter.state = req.query.state;
    if (req.query.city) filter.city = req.query.city;
    if (req.query.category) filter.category = req.query.category;
    if (req.query.search) filter.$text = { $search: req.query.search };
    const places = await Place.find(filter).populate('state', 'name').populate('city', 'name').sort({ createdAt: -1 });
    res.json({ success: true, count: places.length, data: places });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getPlace = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id).populate('state', 'name').populate('city', 'name');
    if (!place) return res.status(404).json({ success: false, message: 'Place not found' });
    res.json({ success: true, data: place });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createPlace = async (req, res) => {
  try {
    const place = await Place.create(req.body);
    res.status(201).json({ success: true, data: place });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updatePlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!place) return res.status(404).json({ success: false, message: 'Place not found' });
    res.json({ success: true, data: place });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deletePlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);
    if (!place) return res.status(404).json({ success: false, message: 'Place not found' });
    res.json({ success: true, message: 'Place deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getPlaces, getPlace, createPlace, updatePlace, deletePlace };
