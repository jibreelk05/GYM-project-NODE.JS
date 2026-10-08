const express = require('express');
const router = express.Router();
const ContactModel = require('../models/ContactModel');

router.get('/', (req, res) => {
  const items = {
    title: 'Contact Us | Gym App',
    contactitems: {
      phone: '+962 798 789 456',
      email: 'gym@gmail.com',
      location: 'Amman, Jordan'
    },
    success: null,
    error: null
  };
  res.render("contact", items);
});

router.post('/', async (req, res) => {
  const items = {
    title: 'Contact Us | Gym App',
    contactitems: {
      phone: '+962 798 789 456',
      email: 'gym@gmail.com',
      location: 'Amman, Jordan'
    }
  };

  try {
    const newContact = new ContactModel({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    await newContact.save();
    res.render("contact", { ...items, success: 'Thank you! Your message has been saved.', error: null });
  } catch (error) {
    res.render("contact", { ...items, success: null, error: 'An error occurred. Please try again.' });
  }
});

module.exports = router;