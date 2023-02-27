module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/users', users.create);
    
    // Login User
    app.get('/login', users.login);
    
    //Get All Users
    app.get('/users', users.findAll);

}