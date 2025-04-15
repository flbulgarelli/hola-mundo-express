function bienvenida(req, res) {
  const nombre = req.query.nombre || 'Mundo';
  res.render('bienvenida', { nombre });
}

function despedida(req, res) {
  const nombre = req.query.nombre || 'Mundo';
  res.render('despedida', { nombre });
}

module.exports = {
  bienvenida,
  despedida
};