const User = require('../models/User');

const showRegistrationForm = (req, res) => {
  res.render('register', { title: 'Register' });
};

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    req.session.userId = user._id
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error: Could not create user');
  }
};

const showLoginForm = (req, res) => {
  res.render('login', { title: 'Login' });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      res.status(400).send('Invalid username or password');
      return;
    }
    req.session.userId = user._id;
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error: Could not log in');
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
};

module.exports = {
  showRegistrationForm,
  register,
  showLoginForm,
  login,
  logout,
};
