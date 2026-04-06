const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  state: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true },
  description: String,
  image: String,
  emoji: { type: String, default: '🏙️' },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('City', citySchema);
