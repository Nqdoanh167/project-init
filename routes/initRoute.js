/** @format */

const express = require('express');
const initController = require('../controllers/initController');
const router = express.Router();
router.get('/', initController.getAll);
module.exports = router;
