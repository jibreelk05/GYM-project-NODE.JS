const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
const items={
    title: 'Gym Features',
featuresitems:
            [{title:'Weightlifting', desc:'Heavy racks, 100kg dumbbells, and Olympic platforms.', price:'30 JOD', icon:'bi-award'},
             {title:'Cardio Zone', desc:'Smart treadmills, bikes, and rowing machines.', price:'25 JOD', icon:'bi-bicycle'}, 
            {title:'Swimming Pool', desc:'Heated indoor pool with sauna access.', price:'40 JOD', icon:'bi-droplet-half'},
            {title:'Personal Training', desc:'1-on-1 coaching with certified expert trainers.', price:'60 JOD', icon:'bi-person-check'}, 
            {title:'Yoga & Pilates', desc:'Flexibility and mental health studio sessions.', price:'20 JOD', icon:'bi-flower1'}, 
            {title:'Nutrition Plans', desc:'Expert dietary advice and meal planning.', price:'15 JOD', icon:'bi-journal-text'}]

};
res.render("features",items)
});


module.exports = router;
