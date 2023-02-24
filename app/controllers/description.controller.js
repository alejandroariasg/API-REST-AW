const Description = require('../models/description.model.js');

// Create and save a new Description
exports.create = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
            return res.status(400).send({
                message: "Los datos de descripción no pueden estar vacíos"
        });
    }
    // Create a new Description with request's data
    const description = new Description({
        id: req.body.id,
        userid: req.body.userid,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        imagen: req.body.imagen,
        descripcion: req.body.descripcion,
        tipo: req.body.tipo,
        estado: req.body.estado
    });
    
    // Save the description in the database
    description.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algo incorrecto al crear el registro."
            });
        });
};

// Retrieve and list all Products
exports.findAll = (req, res) => {
    Description.find()
        .then(descriptions => {
                res.status(200).send(descriptions);
                console.log("Get all descriptions !");
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Something wrong occurred while retrieving the records."
                });
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
