const Doctor = require('../modals/doctorModal');


const registerDoctorAttempt = (req, res) => {
    const newDoctor = new Doctor(req.body);
    newDoctor.save()
        .then(doctor => res.send({
            status: true,
            doctor
        })).catch(err => res.send({
            status: false,
            err
        }));
};

module.exports = {
    registerDoctorAttempt
};