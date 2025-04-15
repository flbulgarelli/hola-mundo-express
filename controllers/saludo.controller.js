class SaludoController {
  bienvenida(req, res) {
    const nombre = req.query.nombre || 'Mundo';
    res.render('bienvenida', { nombre });
  }

  despedida(req, res) {
    const nombre = req.query.nombre || 'Mundo';
    res.render('despedida', { nombre });
  }
}

module.exports = SaludoController;