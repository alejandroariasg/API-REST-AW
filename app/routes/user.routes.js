module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/users', users.create);
    
    // Login User
    app.post('/login', users.login);
    
    app.get('/users', users.findAll);

    

}