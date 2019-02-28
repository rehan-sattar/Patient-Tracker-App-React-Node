const Patient = require("../modals/patientModal")

//============== read all patient =================
const readAllPatient = (req, res) => {
  const doctorId = req.params.id
  Patient.find({
    doctorId: doctorId
  })
    .then(allPatients => {
      if (allPatients.length > 0) {
        res.send({
          count: allPatients.length,
          status: true,
          allPatients
        })
      } else {
        res.send({
          status: false,
          message: "no patients"
        })
      }
    })
    .catch(err => {
      res.send({
        status: false,
        error: err
      })
    })
}

// ============== insert patient =================
const insertPatient = (req, res) => {
  const doctorId = req.params.doctor_id
  const newPatient = new Patient({ doctorId, ...req.body })
  console.log(req.body)
  newPatient
    .save()
    .then(newPatient => {
      res.send({
        status: true,
        newPatient
      })
    })
    .catch(err => {
      res.send({
        status: false,
        error: err
      })
    })
}

const searchPatientByDate = (req, res) => {
  const date = req.params.date
  Patient.find({
    dateOfArrival: date
  })
    .then(result => {
      if (result.length > 0) {
        res.send({
          status: true,
          result
        })
      } else {
        res.send({
          status: false,
          result: "no patients found"
        })
      }
    })
    .catch(err => {
      res.send({
        status: false,
        error: err
      })
    })
}

const searchPatientByName = (req, res) => {
  const doctorID = req.params.docId
  const patientName = req.params.name
  Patient.find({
    doctorId: doctorID
  }).then(result => {
    if (result.length > 0) {
      const allPatients = result.filter(item =>
        item.patientFullName.includes(patientName)
      )
      if (allPatients.length > 0) {
        res.send({
          status: true,
          allPatients
        })
      } else {
        res.send({
          status: false,
          message: "no records found"
        })
      }
    }
  })
}

const deletePatient = (req, res) => {
  const id = req.params.id
  Patient.findByIdAndRemove({
    _id: id
  })
    .then(result => {
      if (result) {
        console.log(result)
        res.send({
          status: true,
          result
        })
      } else {
        res.send({
          status: false,
          message: "no such patient exist in database"
        })
      }
    })
    .catch(err => {
      res.send({
        status: false,
        error: err
      })
    })
}

const updatePatientrecord = (req, res) => {
  const id = req.params.id
  const updatedpatient = req.body
  Patient.findByIdAndUpdate(id, updatedpatient, { new: true })
    .then(updatedPatient => {
      console.log("Updated patient: ", updatedPatient)
      if (updatedPatient) {
        res.send({
          status: true,
          updatedpatient
        })
      }
    })
    .catch(err => {
      res.send({
        status: false,
        error: err
      })
    })
}

const setAppointment = (req, res) => {
  const id = req.params.id
  const appointmentObject = req.body
  Patient.findByIdAndUpdate(
    id,
    { $push: { appointmentRecords: appointmentObject } },
    { new: true }
  )
    .then(updatedPatient => {
      res.send({
        status: true,
        updatedPatient
      })
    })
    .catch(err => {
      res.send({
        status: false,
        error: err
      })
    })
}

const patientHistory = (req, res) => {
  const id = req.params.id
  Patient.findOne({
    _id: id
  }).then(patient => {
    // console.log({...patient})
    // res.send(patient);
    if (patient) {
      // array
      // console.log(patient.appointmentRecords.length > 0)
      // if (patient['appointmentRecords']) {
      console.log(patient)
      res.send({
        status: true,
        allApointments: patient["appointmentRecords"]
      })
      // } else {
      //     res.send({
      //         status: false,
      //         message: "no history found"
      //     })
      // }
    } else {
      res.send({
        status: false,
        message: "no patient found"
      })
    }
  })
}

module.exports = {
  readAllPatient,
  insertPatient,
  searchPatientByDate,
  searchPatientByName,
  deletePatient,
  updatePatientrecord,
  setAppointment,
  patientHistory
}
