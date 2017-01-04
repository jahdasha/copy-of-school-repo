var models  = require('../models');
var express = require('express');
var router  = express.Router();

// post route used to add new task of the person to the database
// grabs the id of that person then assigns the new task to that person
router.post('/:person_id/tasks/create', function (req, res) {
  models.Task.create({
    task: req.body.task,
    person_id: req.params.person_id
  }).then(function() {
    res.redirect('/');
  });
});

// get route used to get the task of the person by id for both person and task
router.get('/:person_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      // will not work if you use task_id so use id
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
