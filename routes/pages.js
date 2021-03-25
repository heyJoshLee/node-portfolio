const router = require('express').Router();
const projects = require('../data/portfolio-pieces.js')
const technologies = require('../data/technologies.js')

router.route('/').get((req, res) => {
  console.log(projects)
  res.render('../views/pages/home.ejs',{
    projects: projects,
    technologies: technologies.sort()
  });
});


module.exports = router;