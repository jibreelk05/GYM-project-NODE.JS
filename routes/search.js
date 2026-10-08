const express = require('express');
const router = express.Router();

const members = [
  { name: "Ali", plan: "gold" },
  { name: "Sara", plan: "silver" },
  { name: "Omar", plan: "gold" },
  { name: "ahmed", plan: "gold" }

];

const services = [
  { name: "Personal Training" },
  { name: "Yoga Classes" },
  { name: "Cardio Program" }
];

router.get('/', (req, res) => {
  const query = req.query.q;

  let memberResults = members;
  let serviceResults = services;

  if (query) {
    memberResults = members.filter(m =>
      m.name.toLowerCase().includes(query.toLowerCase())
    );

    serviceResults = services.filter(s =>
      s.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  res.render("search", {
    memberResults,
    serviceResults,
    query
  });
});

module.exports = router;