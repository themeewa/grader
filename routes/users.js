var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');


var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */

router.get('/profile', isLoggedIn, function(req, res, next) {
	// console.log(req);
	console.log(req.user);
	if (req.user.role=="student") {res.redirect('/student');}
	if (req.user.role=="faculty") {res.redirect('/faculty');}
	// else {res.render('user/profile');}
});

router.get('/', isLoggedIn, function(req, res, next) {
  res.redirect('/users/profile');
});

router.get('/signup',notLoggedIn, function(req, res, next) {
	var messages = req.flash('error');
  res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});
router.post('/signup', passport.authenticate('local.signup', {
	successRedirect: '/users/profile',
	failureRedirect: '/users/signup',
	failureFlash: true
}));

router.get('/login',notLoggedIn, function(req, res, next) {
	var messages = req.flash('error');
  res.render('user/login', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});
router.post('/login',passport.authenticate('local.signin', {
	// successRedirect: '/inventory/entry',
	successRedirect: '/users/profile',
	failureRedirect: '/users/login',
	failureFlash: true
}));

router.get('/logout',isLoggedIn, function(req,res,next) {
	req.logout();
	res.redirect('/');
});

module.exports = router;

function isLoggedIn(req,res,next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}

function notLoggedIn(req,res,next) {
	if (!req.isAuthenticated()) {
		return next();
	}
	res.redirect('/users/profile');
}
