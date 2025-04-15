const express = require('express');
const { engine } = require('express-handlebars');
const homeController = require('./controllers/home.controller');
const saludoController = require('./controllers/saludo.controller');
const saludoApiController = require('./controllers/api/saludo.controller');

const app = express();
const port = 9000;

// Configurar Handlebars como el motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

const router = express.Router();

router.get('/', (req, res) => homeController.index(req, res));
router.get('/bienvenida', (req, res) => saludoController.bienvenida(req, res));
router.get('/despedida', (req, res) => saludoController.despedida(req, res));

router.get('/api/bienvenida', (req, res) => saludoApiController.bienvenida(req, res));
router.get('/api/despedida', (req, res) => saludoApiController.despedida(req, res));

app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});