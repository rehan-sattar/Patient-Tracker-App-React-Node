const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
router.post('/addPatient/', controller.insertPatient);
router.get('/allPatients/:id', controller.readAllPatient);
router.get('/patientByName/:docId/:name', controller.searchPatientByName);
router.get('/patientByDate/:date', controller.searchPatientByDate);
router.delete('/deletPatient/:id', controller.deletePatient);
router.put('/updatePatient/:id', controller.updatePatientrecord);

module.exports = router;