module.exports = (app) => {
    const descriptions = require('../controllers/description.controller.js');

    // Create una nueva descripcion de incidencia
    app.post('/description', descriptions.create);

     // Buscar incidencias de acuerdo a un rango 
     app.get('/descriptionCoordinates', descriptions.findAllByCoordinates);

    // Listar todas las descripcion de incidencias
    app.get('/description', descriptions.findAll);

    // Consultar descripcion de incidencia by id
    app.get('/description/:id', descriptions.findOne);

    // Consultar descripcion de incidencia by userId
    app.get('/description/user/:id', descriptions.findAllByUserId);

    // Update descripcion de incidencia by id
    app.put('/description/:id', descriptions.update);

}
   