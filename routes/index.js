var express = require('express');
var router = express.Router();
const moment = require('moment')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/*', function(req, res, next) {
  // set the valid date format
  let dateFormats = ['MM-DD-YYYY', 'DD-MM-YYYY', 'MMMM-DD-YYYY', 'x', 'X']
  // parse userInput into a moment date object in accordance to date formats
  let date = moment(req.params[0].substring(1), dateFormats)
  // check if date is valid using isValid moment method
  if (date.isValid()) {
    // response with the unix and natural time format
    res.send({
      unix: moment(date).format('X'),
      natural: moment(date).format('MMMM D, YYYY')
    })
  } else {
    res.send({
      unix: null,
      natural: null
    })
  }
});

module.exports = router;
