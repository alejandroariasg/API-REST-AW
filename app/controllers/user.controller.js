const User = require('../models/user.model.js');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

// Create and save a new User
exports.create = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
            return res.status(400).send({
                message: "User data can not be empty"
        });
    }
    // Create a new User with request's data
    const user = new User({
        numdocumento: req.body.numdocumento,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        contrasena: crypto.createHash('sha256').update(req.body.contrasena).digest('hex'),
        tipo: req.body.tipo || 1
    });
    
    // Save the Product in the database
    user.save()
        .then(data => {
            res.status(200).send(data);
            console.log("Usuario guardado exitosamente")
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong occurred while creating the record."
            });
        });
};

// Retrieve and list all Products
exports.login = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
            return res.status(400).send({
                message: "User data can not be empty"
        });
    }
    User.findOne({ numdocumento: req.body.numdocumento, contrasena :  crypto.createHash('sha256').update(req.body.contrasena).digest('hex') }, (erro, usuarioDB)=>{
        if (erro) {
            return res.status(500).json({
                ok: false,
                err: erro
            })
        }

        // Verifica que exista un usuario con el mail escrita por el usuario.
        if (!usuarioDB) {
            return res.status(400).json({
                status: false,
                message: "Usuario o contraseña incorrectos"
            })
        }else{
            return res.status(200).json({
                status: true,
                message: "Usuario autentificado",
                data : usuarioDB
            });
        }
    
    });

};

// Retrieve and list all Users
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.status(200).send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong occurred while retrieving the records."
            });
        });
};
   
   


   