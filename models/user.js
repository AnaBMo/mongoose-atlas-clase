//! Creamos el modelo del usuario. 
    // Esto permite que podamos realizar operaciones CRUD en la base de datos MongoDB 
    // relacionadas con la colección de usuarios.

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
}, { timestamps: true });
    
const User = mongoose.model('User', UserSchema);
    
module.exports = User;