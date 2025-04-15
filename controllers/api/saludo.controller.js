class SaludoController {
  bienvenida(req, res) {
    const nombre = req.query.nombre || 'Mundo';
    res.json({ mensaje: `¡Hola ${nombre}!` });
  }

  despedida(req, res) {
    const nombre = req.query.nombre || 'Mundo';
    res.json({ mensaje: `¡Adios ${nombre}, que la fuerza te acompañe!` });
  }
}

module.exports = SaludoController;