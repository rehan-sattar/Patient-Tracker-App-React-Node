const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorControllers');
const patientController = require('../controllers/patientController');

// +============== All patient routes ==================+ 

router.post('/addPatient/', patientController.insertPatient);
router.get('/allPatients/:id', patientController.readAllPatient);
router.get('/patientByName/:docId/:name', patientController.searchPatientByName);
router.get('/patientByDate/:date', patientController.searchPatientByDate);
router.delete('/deletPatient/:id', patientController.deletePatient);
router.put('/updatePatient/:id', patientController.updatePatientrecord);



// ================ All Doctor routes ================+ 

router.post('/registerDoctor', doctorController.registerDoctorAttempt);
module.exports = router;