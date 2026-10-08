const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
const items={
  title: 'Gym App',
        message: 'Transform Your Body Today 💪',
        homeitems: [
            { title: 'Training Plans', desc: 'Personalized workouts for you', icon: 'bi-heart-pulse' },
            { title: 'Nutrition',      desc: 'Healthy diet plans',           icon: 'bi-egg-fried'   },
            { title: 'Progress',       desc: 'Track your fitness journey',   icon: 'bi-graph-up'    }
        ]
    };res.render("home",items)


}
  
);

module.exports = router;
