const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    patientFullName: {
        type: String,
        require: true
    },
    patientAge: {
        type: Number,
        require: true
    },
    patientDiseas: {
        type: String,
        require: true
    },
    medicationProvided: {
        type: String,
        require: true
    },
    dateOfArrival: {
        type: String,
        require: true
    },
    doctorId: {
        type: String,
        require: true
    }

});

PatientSchema.index({
    'patientFullName': 'text'
});
module.exports = mongoose.model('Patient', PatientSchema);