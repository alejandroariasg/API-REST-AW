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
    User.findOne({ email: req.body.correo }, (erro, usuarioDB)=>{
        if (erro) {
            return res.status(500).json({
                ok: false,
                err: erro
            })
        } 
        console.log(usuarioDB);
        // Verifica que exista un usuario con el mail escrita por el usuario.
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos"
                }
            })
        }

        // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
        if (! bcrypt.compareSync(crypto.createHash('sha256').update(req.body.contrasena).digest('hex'), usuarioDB.contrasena)){
            return res.status(400).json({
                    ok: false,
                    err: {
                        message: "Usuario o contraseña incorrectos"
                }
            });
        }

    
    });

};

// Get a single Product by its id
exports.findOne = (req, res) => {
    console.log("Getting a particular product ... soon!");
};

// Update a Product by its id
exports.update = (req, res) => {
    console.log("Updating a particular product ... soon!");
};

// Delete a Product by its id
exports.delete = (req, res) => {
    console.log("Deleting a particular product ... soon!");
};
   