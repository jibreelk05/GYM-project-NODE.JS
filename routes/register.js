const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/register', (req, res) => {
    res.render('register', { 
        errors: {}, 
        oldInput: {} 
    });
});

router.post('/register', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 2 }).withMessage('Password must be 5+ chars')
], (req, res) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errObj = {};
        errors.array().forEach(e => { errObj[e.path] = e.msg; });

        return res.render('register', {
            errors: errObj,
            oldInput: req.body
        });
    }

    req.session.registeredUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
};

res.redirect('/login');
});

module.exports = router;