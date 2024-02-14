// controllers/skills.js



module.exports = {
    index,
    show
  };

function index(req, res) {
    res.render('skills/index', {
      skills: skills.getAll()
    });
  }
  const skills = require('../models/skills');

  function show(req, res) {
    res.render('skills/show', {
      skills: skills.getOne(req.params.id),
    });
  }
  