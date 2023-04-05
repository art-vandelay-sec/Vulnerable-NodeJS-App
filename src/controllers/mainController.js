const index = (req, res) => {
    res.render('index', { title: 'My Web App' });
  };
  
  module.exports = {
    index,
  };