const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
        numdocumento: {
            type: String,
            index: true,
            unique: true,
            required: true,
            trim: true,
            minlength: 4
        },
        nombre : String,
        apellidos : String,
        correo : String,
        contrasena : String,
        tipo : Number,
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('User', UserSchema);

