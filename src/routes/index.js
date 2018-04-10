import express from 'express';
import kadanes from '../modules/kadanes';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const result = kadanes('hello');
  res.render('index', { title: 'Express' });
});

module.exports = router;
