const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const authController = require('./controllers/authController'); 

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(express.static('public'));

// Ruta principal: muestra login.html
app.get('/', (req, res) => {
    //dirname es una variable global que contiene la ruta del directorio actual
    //res.sendfile envia un archivo al cliente
    //path.join une rutas de archivos de manera segura
  res.sendFile(path.join(__dirname, "views", "login.html")); // se agrego el path.join 
});

// Rutas de autenticación
app.post('/login', authController.login);
app.get('/dashboard', authController.dashboard);

// Servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
