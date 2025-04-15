const { leerNombre } = require("../../utils");

function bienvenida(req, res) {
  res.json({ mensaje: `¡Hola ${leerNombre(req)}!` });
}

function despedida(req, res) {
  res.json({ mensaje: `¡Adios ${leerNombre(req)}, que la fuerza te acompañe!` });
}

module.exports = {
  bienvenida,
  despedida
}