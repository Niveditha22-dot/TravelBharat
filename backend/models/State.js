const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  capital: { type: String, required: true },
  region: { type: String, enum: ['North', 'South', 'East', 'West', 'Central', 'Northeast'], required: true },
  description: { type: String, required: true },
  language: [String],
  bestTime: String,
  famousFor: String,
  image: String,
  emoji: { type: String, default: '🗺️' },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('State', stateSchema);
