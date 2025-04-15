const express = require('express');
const { engine } = require('express-handlebars');
const HomeController = require('./controllers/home.controller');
const SaludoController = require('./controllers/saludo.controller');
const SaludoApiController = require('./controllers/api/saludo.controller');

const app = express();
const port = 9000;

// Configurar Handlebars como el motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

const router = express.Router();

const homeController = new HomeController();
const saludoController = new SaludoController();

router.get('/', (req, res) => homeController.index(req, res));
router.get('/bienvenida', (req, res) => saludoController.bienvenida(req, res));
router.get('/despedida', (req, res) => saludoController.despedida(req, res));

const saludoApiController = new SaludoApiController();

router.get('/api/bienvenida', (req, res) => saludoApiController.bienvenida(req, res));
router.get('/api/despedida', (req, res) => saludoApiController.despedida(req, res));

app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});