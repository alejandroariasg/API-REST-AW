const mongoose = require('mongoose');
const DescriptionSchema = mongoose.Schema({
    
            id: {
                type: Number,
                unique: true,
                required: true
            },
            userid: String,
            latitud: String,
            longitud: String,
            imagen: String,
            descripcion: String,
            tipo: String,
            estado: Number
        }, {
            timestamps: true
        });

module.exports = mongoose.model('Description', DescriptionSchema);