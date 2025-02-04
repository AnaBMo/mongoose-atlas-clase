//!  Conexión de la base de datos a Mongo Atlas.
require('dotenv').config();
const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        console.log("MONGO_URI:", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};

module.exports = {
    dbConnection,
};


//! No funcionaba porque en el enunciado llaman 
    //! URL=.... dentro del .env
    //! URI=... al conectar