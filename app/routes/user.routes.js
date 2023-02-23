module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/users', users.create);
    
    // Login User
    app.post('/login', users.login);
    
    // Get a single Product by id
    app.get('/users/:id', users.findOne);
    
    // Update a Product by id
    app.put('/users/:id', users.update);
    
    // Delete a Product by id
    app.delete('/users/:id', users.delete);

}