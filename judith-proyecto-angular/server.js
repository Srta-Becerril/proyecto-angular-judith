const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware: body-parser para JSON y urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware: cors con configuración de origen
app.use(cors({ origin: 'http://localhost:8081' }));

// Ruta GET de prueba
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

// Puerto de escucha
const port = 8080;
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});


