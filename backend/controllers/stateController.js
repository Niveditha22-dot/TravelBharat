const State = require('../models/State');

const getStates = async (req, res) => {
  try {
    const states = await State.find({ isActive: true }).sort({ name: 1 });
    res.json({ success: true, count: states.length, data: states });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getState = async (req, res) => {
  try {
    const state = await State.findById(req.params.id);
    if (!state) return res.status(404).json({ success: false, message: 'State not found' });
    res.json({ success: true, data: state });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createState = async (req, res) => {
  try {
    const state = await State.create(req.body);
    res.status(201).json({ success: true, data: state });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateState = async (req, res) => {
  try {
    const state = await State.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!state) return res.status(404).json({ success: false, message: 'State not found' });
    res.json({ success: true, data: state });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteState = async (req, res) => {
  try {
    const state = await State.findByIdAndDelete(req.params.id);
    if (!state) return res.status(404).json({ success: false, message: 'State not found' });
    res.json({ success: true, message: 'State deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getStates, getState, createState, updateState, deleteState };
