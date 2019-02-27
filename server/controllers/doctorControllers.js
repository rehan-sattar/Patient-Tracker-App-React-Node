const Doctor = require("../modals/doctorModal")

const registerDoctorAttempt = (req, res) => {
  Doctor.find({ email: req.body.email }).then(doctors => {
    if (doctors.length === 0) {
      const newDoctor = new Doctor(req.body)
      newDoctor
        .save()
        .then(doctor =>
          res.send({
            status: true,
            doctor
          })
        )
        .catch(err =>
          res.send({
            status: false,
            err
          })
        )
    } else {
      res.send({
        status: false,
        err: "Doctor with this email already exist."
      })
    }
  })
}

module.exports = {
  registerDoctorAttempt
}
