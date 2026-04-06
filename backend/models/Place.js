const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Place name is required'],
    trim: true
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State',
    required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true
  },
  category: {
    type: String,
    enum: ['Heritage', 'Nature', 'Religious', 'Adventure'],
    required: [true, 'Category is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  historicalSignificance: String,
  bestTime: String,
  entryFee: String,
  timings: String,
  duration: String,
  location: {
    mapLink: String,
    latitude: Number,
    longitude: Number
  },
  images: [String],
  nearbyAttractions: [String],
  highlights: [String],
  travelTips: [String],
  tags: [String],
  status: {
    type: String,
    enum: ['live', 'draft'],
    default: 'draft'
  },
  isFeatured: { type: Boolean, default: false },
  emoji: { type: String, default: '📍' }
}, { timestamps: true });

// Search index
placeSchema.index({ name: 'text', description: 'text', tags: 'text' });

module.exports = mongoose.model('Place', placeSchema);
