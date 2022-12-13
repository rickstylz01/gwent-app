const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  art: {
    id: Number,
    artist: String,
  },
  ability: {
    id: Number,
    name: String,
    description: String
  },
  armor: Number,
  categories: [{
    id: Number,
    name: String
  }],
  color: String,
  faction: String,
  keywords: [String],
  name: String,
  power: Number,
  provision: Number,
  rarity: String,
  type: String
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
