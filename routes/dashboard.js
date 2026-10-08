const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
    const theme = req.cookies.theme || "light";
    
    if (!req.session.user) {
        return res.redirect('/login');
    }

    res.render("dashboard", {
        user: req.session.user,
        theme: theme
    });
});

module.exports = router;