const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema({
      name: String
});

module.exports = mongoose.model('Role', roleSchema);
