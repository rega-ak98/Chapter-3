var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { layout: false});
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboardTableHome');
});

router.get('/listCar', function(req, res, next) {
  res.render('carsListCar');
});

router.get('/addNew', function(req, res, next) {
  res.render('carsAddNew');
});

module.exports = router;
