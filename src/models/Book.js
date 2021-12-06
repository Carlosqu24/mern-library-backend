const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
      name: { type: String, required: true },
      description: { type: String, required: true },
      author: { type: String },
      gender: { type: String },
      imageURL: { type: String },
      date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Book', bookSchema);
