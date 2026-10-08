const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const savedUser = req.session.registeredUser;

    if (
        savedUser &&
        email === savedUser.email &&
        password === savedUser.password
    ) {
        req.session.user = savedUser;

        res.cookie('lastLogin', new Date().toLocaleString(), {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
        });

        return res.redirect('/');
    }

    res.render('login', { error: "Incorrect email or password" });
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) console.log(err);
        res.redirect('/');
    });
});

module.exports = router;