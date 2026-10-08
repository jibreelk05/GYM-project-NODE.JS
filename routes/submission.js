const express = require('express');
const router = express.Router();
const subController = require('../Controllers/submissionController');

router.get('/submit', subController.getSubmitPage);
router.post('/submit', subController.postSubmit);

router.get('/my-submissions', subController.getMySubmissions);

module.exports = router;