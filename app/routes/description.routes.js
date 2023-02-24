module.exports = (app) => {
    const descriptions = require('../controllers/description.controller.js');

    // Create una nueva descripcion de incidencia
    app.post('/description', descriptions.create);

    // Listar todas las descripcion de incidencias
    app.get('/description', descriptions.findAll);

    // Consultar descripcion de incidencia by id
    app.get('/description/:id', descriptions.findOne);

    // Consultar descripcion de incidencia by userId
    app.get('/description/user/:id', descriptions.findAllByUserId);

    // Update descripcion de incidencia by id
    app.put('/description/:id', descriptions.update);

    // Delete descripcion de incidencia by id
    app.delete('/description/:id', descriptions.delete);

}
   