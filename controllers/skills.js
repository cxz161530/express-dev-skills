// controllers/skills.js



module.exports = {
    index,
    show,
    newSkills,
    create

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
  function newSkills(req, res) {
    res.render('skills/new', { title: 'New skills' });
  }

  function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    // Todo.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
  }