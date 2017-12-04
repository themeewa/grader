var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');


var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */

router.get('/', isLoggedIn, function(req, res, next) {
	// console.log(req);
	console.log(req.user);
	if (req.user.role=="student") {res.render('student/studentprofile');}
	if (req.user.role=="faculty") {res.redirect('/faculty');}
	// else {res.render('user/profile');}
});

module.exports = router;

function isLoggedIn(req,res,next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}