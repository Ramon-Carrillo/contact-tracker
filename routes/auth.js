const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc Gets the logged user
//@access Private

router.get('/', (req, res) => {
  res.send('Get logged in user');
});

//@route POST api/auth
//@desc Register a user
//@access Public

router.post('/', (req, res) => {
  res.send('');
});

module.exports = router;
