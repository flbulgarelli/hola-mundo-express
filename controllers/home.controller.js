class HomeController {
  index(req, res) {
    res.redirect('/bienvenida');
  }
}

module.exports = HomeController;