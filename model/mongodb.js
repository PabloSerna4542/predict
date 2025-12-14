'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PredictionSchema = new Schema({
  features: {type: [Number], required: true},
  result: {type: Number, required: true},
  createdAt: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Prediction', PredictionSchema);

