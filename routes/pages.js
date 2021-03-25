const router = require('express').Router();
const projects = require('../data/portfolio-pieces.js')

router.route('/').get((req, res) => {
  console.log(projects)
  res.render('../views/pages/home.ejs',{
    projects: projects
  });
});


module.exports = router;