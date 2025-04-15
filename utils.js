function leerNombre(req) {
  return req.query.nombre || 'Mundo';
}

module.exports = { leerNombre }