// controllers/skills.js



module.exports = {
    index
  };

function index(req, res) {
    res.render('skills/index', {
      skills: skills.getAll()
    });
  }
  const skills = require('../models/skills');