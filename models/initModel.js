/** @format */

const mongoose = require('mongoose');

const initSchema = new mongoose.Schema({});

const Init = mongoose.model('Init', initSchema);
module.exports = Init;
