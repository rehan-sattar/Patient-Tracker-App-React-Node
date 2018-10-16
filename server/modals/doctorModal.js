const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    gender: String
});

module.exports = mongoose.model('Doctor', DoctorSchema);