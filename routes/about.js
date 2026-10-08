const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
const items ={
  title: 'About Us',
    projectName: 'Fitness Gym Platform',
    description: 'Helping users find the best gyms easily.',
    aboutitems: [
                   { name: 'Jibreel' },
                   { name: 'Roaa' },
                   { name: 'Saja' },
                   { name: 'Mohammad' },
                   { name: 'ِAya' }
    ]
  };res.render("about",items)

  })

module.exports = router;
