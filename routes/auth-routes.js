// routes/auth-routes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');

// User model
const User = require('../models/user');
const Course = require('../models/Course');

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.get('/signup', (req, res, next) => {
  res.render('auth/signup')
});

router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;

  // 1. Check username and password are not empty
  if (!username || !password) {
    res.render('auth/signup', { errorMessage: 'Indicate username and password' });
    return;
  }

  User.findOne({ username })
    .then(user => {
      // 2. Check user does not already exist
      if (user !== null) {
        res.render('auth/signup', { message: 'The username already exists' });
        return;
      }

      // Encrypt the password
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      
      // Save the user in DB
      

      const newUser = new User({
        username,
        password: hashPass
      });

      newUser
        .save()
        .then(() => res.redirect('/index'))
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

router.get('/login', (req, res, next) => {
  res.render('auth/login',{"errorMessage": req.flash("error") });
});
 
router.post("/login", passport.authenticate("local", {
  successRedirect: "/index",
  failureRedirect: "/login",
  failureFlash: true 

}));


router.get('/index/private', checkRoles('ADMIN'),(req, res) => {
  Course.find()
  .then(courses=>{
    res.render('private', { user: req.user,courses });
  })
 
});

function checkRoles(role) {
  return function (req, res, next) {
    if (req.isAuthenticated() && req.user.role === role) {
      return next()
    } else {
      res.redirect('/login');
    }
  };
}
//const checkGuest = checkRoles('GUEST');
//const checkAdmin = checkRoles('ADMIN');



router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
