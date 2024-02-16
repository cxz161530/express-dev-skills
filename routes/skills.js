var express = require('express');
var router = express.Router();


 // Require the controller that exports To-Do CRUD functions
 const skillsCtrl = require('../controllers/skills');

 // All actual paths begin with "/skills"

 // GET /todos
 router.get('/', skillsCtrl.index);
 router.get('/:new',skillsCtrl.newSkills)
 router.get('/:id', skillsCtrl.show)
 router.post('/', skillsCtrl.create);
 router.delete('/:id', skillsCtrl.deleted);


module.exports = router;
