var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Installer Passport a cet endroit
router.get('/locapic',
  passport.authenticate('facebook', { scope: 'email' })
);

router.get('/locapic',
  passport.authenticate('facebook', { session: false }),


  function(req, res) {
    res.redirect(
      "https://auth.expo.io...?userId="+req.user.id
      +"&firstName="+req.user.first_name 
      +"&lastName="+req.user.last_name);
  }
);

module.exports = router;
