exports.index = (req, res) => {
  const userId = req.session.userId || null; // Get the userId from session or set it to null
  res.render('index', {
    title: 'Your App Title',
    userId: userId,
  });
};