const express = require('express');
const bcrypt = require('bcryptjs')

const db = require('./db/models');
const { csrfProtection, asyncHandler} = require('./utils');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', csrfProtection, asyncHandler((req, res, next) => {

}));

module.exports = router;
