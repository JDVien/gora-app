const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler} = require('./utils');
const { validationResult, check } = require('express-validator');
const { loginUser, restoreUser, logoutUser } = require('../auth.js');

const router = express.Router();

const userValidators = [
  check('firstName')
    .exists({checkFalsey: true})
    .withMessage('Please provide a valid first name.')
    .isLength({ max: 50 })
    .withMessage('First name must be fewer than 50 characters.'),
  check('lastName')
    .exists({checkFalsey: true})
    .withMessage('Please provide a valid last name.')
    .isLength({ max: 50 })
    .withMessage('Last name must be fewer than 50 characters.'),
  check('username')
    .exists({checkFalsey: true})
    .withMessage('Please provide a valid username.')
    .isLength({ max: 25 })
    .withMessage('Username must be fewer than 25 characters.')
    .custom((value) => {
      return db.User.findOne({ where: { username: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided username is already in use by another account');
          }
        });
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for email address')
    .isLength({ max: 255 })
    .withMessage('Email address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided email address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for email address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for password'),
];


/* GET user listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//GET users/register
router.get('/register', csrfProtection, asyncHandler((req, res, next) => {
  const user = db.User.build();
  res.render('user-register', { user, title: 'Register', csrfToken: req.csrfToken() });
}));

//POST users/register
router.post('/register', userValidators, csrfProtection, asyncHandler(async(req, res, next) => {
  const { firstName, lastName, username, email, password, confirmPassword } = req.body;
  const user = db.User.build({ firstName, lastName, username, email });
  const validatorErrors = validationResult(req);
  if (validatorErrors.isEmpty()){
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    res.redirect('/questions');
  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    // console.log(errors)
    res.render('user-register', { errors, user, title: 'Register', csrfToken: req.csrfToken() });
  }
}));

//GET users/login
router.get('/login', csrfProtection, asyncHandler(async(req, res, next) => {
  res.render('user-login', { title: 'Log In', csrfToken: req.csrfToken() });
}));


//POST users/login
router.post('/login', loginValidators, csrfProtection, asyncHandler(async(req, res) => {
  const { email, password } = req.body;
  let errors = [];
  const validatorErrors = validationResult(req);
  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } });
    if (user !== null){
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
      if (passwordMatch){
        loginUser(req, res, user);
        return res.redirect('/questions');
      }
    }
    errors.push('Login failed for the provided email and password.')
  } else {
    errors = validatorErrors.array().map(error => error.msg);
  }
  res.render('user-login', {
    title: 'Log In',
    email,
    errors,
    csrfToken: req.csrfToken()
  })
}));

//GET users/login-demo
router.get("/login/demo", async(req, res) => {
  let user = await db.User.findByPk(5)
  loginUser(req, res, user);
  return res.redirect("/questions");
})

//GET users/logout
router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
});

module.exports = router;
