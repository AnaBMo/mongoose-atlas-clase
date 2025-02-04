require('dotenv').config();
console.log("MONGO_URI:", process.env.MONGO_URI); 

const express = require('express');
const router = express.Router();
const usersRoutes = require('./users');

require('dotenv').config();
console.log("MONGO_URI:", process.env.MONGO_URI); 

router.use('/', usersRoutes);

module.exports = router;