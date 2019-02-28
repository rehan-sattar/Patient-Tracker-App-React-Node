import { DoctorActions } from "../Actions/AllActions"
import { API_ENDPOINT } from "./ActionCreatorsForUsers"

export const getAllPatients = () => {
  return dispatch => {
    let id = localStorage.getItem("doctor_id")
    fetch(`${API_ENDPOINT}/allPatients/${id}`)
      .then(res => res.json())
      .then(patients => {
        if (patients.status && patients.allPatients.length > 0) {
          dispatch({
            type: DoctorActions.read_all_patient_success,
            payload: patients.allPatients
          })
        } else {
          dispatch({
            type: DoctorActions.read_all_patient_error,
            payload: "No Patients!"
          })
        }
      })
      .catch(err => console.log("Error: ", err))
  }
}

export const addPatient = ({
  patientFullName,
  patientAge,
  patientDiseas,
  medicationProvided,
  dateOfArrival,
  gender
}) => {
  return dispatch => {
    let id = localStorage.getItem("doctor_id")
    fetch(`${API_ENDPOINT}/addPatient/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        id,
        patientFullName,
        patientAge,
        gender,
        patientDiseas,
        medicationProvided,
        dateOfArrival
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status) {
          dispatch({
            type: DoctorActions.add_patient_success,
            payload: data.newPatient
          })
        } else {
          dispatch({
            type: DoctorActions.add_patient_error,
            payload: "Sorry, patient was not added!"
          })
        }
      })
      .catch(err => console.log("Error: ", err))
  }
}
