import { DoctorActions } from '../Actions/AllActions'
import { API_ENDPOINT } from './ActionCreatorsForUsers'

export const getAllPatients = () => {
  return dispatch => {
    let id = localStorage.getItem('doctor_id')
    fetch(`${API_ENDPOINT}/allPatients/${id}`)
      .then(res => res.json())
      .then(patients => {
        if (patients.status) {
          dispatch({
            type: DoctorActions.read_all_patient_success,
            payload: patients.allPatients
          })
        } else {
          dispatch({
            type: DoctorActions.read_all_patient_error,
            payload: patients.message
          })
        }
      })
      .catch(err => console.log('Error: ', err))
  }
}

export const addPatient = ({
  patientFullName,
  patientAge,
  patientDiseas,
  medicationProvided,
  dateOfArrival
}) => {
  return dispatch => {
    let id = localStorage.getItem('doctor_id')
    fetch(`${API_ENDPOINT}/addPatient/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        id,
        patientFullName,
        patientAge,
        patientDiseas,
        medicationProvided,
        dateOfArrival
      })
    })
      .then(res => res.json())
      .then(patient => console.log(patient))
      .catch(err => console.log('Error: ', err))
  }
}
