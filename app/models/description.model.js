const mongoose = require('mongoose');
const DescriptionSchema = mongoose.Schema({
    
            userid: {
                type: String,
                unique: true,
                required: true
            },
            latitud: Number,
            longitud: Number,
            imagen: String,
            descripcion: String,
            tipo: String,
            estado: Number
        }, {
            timestamps: true
        });

module.exports = mongoose.model('Description', DescriptionSchema);