//! Servidor de express con una conexión a una base de datos MongoDB y 
//! con operaciones CRUD para la colección de usuarios.

const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');

app.use(express.json());
app.use('/', routes);

dbConnection();

app.listen(PORT, () => console.log(`Server started on ${PORT}`));