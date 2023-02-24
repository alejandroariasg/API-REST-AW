const Description = require('../models/description.model.js');

// Crea y guarda una nueva Description
exports.create = (req, res) => {

    if(Object.keys(req.body).length === 0) {
            return res.status(400).send({
                message: "Los datos de descripción no pueden estar vacíos"
        });
    }
    // Guardar una nueva Description con el  request's data
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
    
    // Guarda la description en la base de datos
    description.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algo incorrecto al crear el registro."
            });
        });
};

// Lista todas las Description
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

// Consultar descripcion de incidencias por userId
exports.findAllByUserId = (req, res) => {
    Description.find()
        .then(descriptions => {
            const resultado = descriptions.filter( description => description.userid === req.params.id)
                res.status(200).send(resultado);
                console.log("Get all descriptions !");
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Something wrong occurred while retrieving the records."
                });
            });
                
};


    

// Get a single Description by its id
exports.findOne = (req, res) => {
    Description.findById(req.params.id)
    .then(description => {
        if(!description) {
            return res.status(404).send({
                message: "Description no encontrado con id:" + req.params.id
            });
        }
        res.status(200).send(description);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                 message: "Description no encontrado con id:" + req.params.id
            });
        }

        return res.status(500).send({
             message: "Ocurrió algo incorrecto al recuperar el registro con id:"  + req.params.id
        });
    });
};  



// Update a Description by its id
exports.update = (req, res) => {

    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Description los datos no pueden estar vacios"
        });
    }

    Description.findByIdAndUpdate(req.params.id, {
        estado: req.body.estado
    }, { new: true })

    .then(description => {
        if(!description) {
            return res.status(404).send({
             message: "Description no encontrado con id:" + req.params.id
            });
        }
            res.status(200).send(description);
    }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Description no encontrado con id::" + req.params.id
                });
            }

            return res.status(500).send({
                message: "Ocurrió algo incorrecto al actualizar el registro con id:" +
                req.params.id
            });
        });
};



// Delete a Description by its id
exports.delete = (req, res) => {
    console.log("Deleting a Description product ... soon!");
};
