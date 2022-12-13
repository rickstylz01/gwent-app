const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  art: {
    id: Number,
    artist: String,
    required: true
  },
  ability: {
    id: { type: Number },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    required: true
  },
  armor: Number,
  categories: [{
    id: Number,
    name: String,
    required: true
  }],
  color: {
    type: String,
    required: true
  },
  faction: {
    type: String,
    required: true
  },
  keywords: [String],
  name: {
    type: String,
    required: true
  },
  power: {
    type: Number,
    required: true
  },
  provision: {
    type: Number,
    required: true
  },
  rarity: String,
  type: {
    type: String,
    required: true
  }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
