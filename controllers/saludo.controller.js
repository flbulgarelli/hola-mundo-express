const { leerNombre } = require("../utils");

function bienvenida(req, res) {
  res.render('bienvenida', { nombre: leerNombre(req) });
}

function despedida(req, res) {
  res.render('despedida', { nombre: leerNombre(req) });
}

module.exports = {
  bienvenida,
  despedida
};