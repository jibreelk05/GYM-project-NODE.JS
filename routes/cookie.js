const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("cookie", {
    theme: req.cookies.theme,
    language: req.cookies.language
  });
});


router.get("/set-dark", (req, res) => {
  res.cookie("theme", "dark");
  res.redirect("/cookie");
});


router.get("/set-light", (req, res) => {
  res.cookie("theme", "light");
  res.redirect("/cookie");
});


router.get("/set-en", (req, res) => {
  res.cookie("language", "en");
  res.redirect("/cookie");
});

router.get("/set-ar", (req, res) => {
  res.cookie("language", "ar");
  res.redirect("/cookie");
});

module.exports = router;