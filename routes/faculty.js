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
	if (req.user.role=="student") {res.redirect('/student');}
	if (req.user.role=="faculty") {res.render('faculty/facultyprofile');}
	// else {res.render('user/profile');}
});

router.get('/setpattern', isLoggedIn, function(req, res, next) {
	// console.log(req);
	console.log(req.user);
	if (req.user.role=="student") {res.redirect('/student');}
	if (req.user.role=="faculty") {res.render('faculty/setPattern.hbs');}
	// else {res.render('user/profile');}
});
module.exports = router;

function isLoggedIn(req,res,next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}