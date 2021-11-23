const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc Get all user's contacts
//@access Private

router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route POST api/contacts
// @desc Add new contacts
//@access Private

router.post('/', (req, res) => {
  res.send('Add a contact');
});

// @route PUT api/contacts
// @desc Update user's contacts
//@access Private

router.get('/:id', (req, res) => {
  res.send('update contacts');
});

// @route DELETE api/contacts
// @desc DELETE user's contacts
//@access Private

router.get('/:id', (req, res) => {
  res.send('Delete contacts');
});

module.exports = router;
