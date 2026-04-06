const City = require('../models/City');

const getCities = async (req, res) => {
  try {
    const filter = {};
    if (req.query.state) filter.state = req.query.state;
    const cities = await City.find(filter).populate('state', 'name').sort({ name: 1 });
    res.json({ success: true, count: cities.length, data: cities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.id).populate('state', 'name');
    if (!city) return res.status(404).json({ success: false, message: 'City not found' });
    res.json({ success: true, data: city });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.status(201).json({ success: true, data: city });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateCity = async (req, res) => {
  try {
    const city = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!city) return res.status(404).json({ success: false, message: 'City not found' });
    res.json({ success: true, data: city });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteCity = async (req, res) => {
  try {
    const city = await City.findByIdAndDelete(req.params.id);
    if (!city) return res.status(404).json({ success: false, message: 'City not found' });
    res.json({ success: true, message: 'City deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getCities, getCity, createCity, updateCity, deleteCity };
