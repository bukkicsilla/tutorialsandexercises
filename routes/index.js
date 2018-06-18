var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainpage');
var meanwebController = require('../controllers/meanweb');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

/*var main = function(req, res, next){
     res.render('index', {title: 'Welcome to the Tutorial Main Page'});    
}*/

router.get('/', mainController.main);
router.get('/meanweb', mainController.meanweb);
router.get('/mobileweb', mainController.mobileweb);
router.get('/medicine', mainController.medicine);
router.get('/math', mainController.math);
router.get('/music', mainController.music);
router.get('/miscellaneous', mainController.miscellaneous);
router.get('/meanweb/crudandmongodb', meanwebController.crudmongodb);

module.exports = router;
