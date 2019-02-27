import { DoctorActions } from '../Actions/AllActions'
import swal from 'sweetalert'
const defaultState = {
  patients: []
}

export const patientReducer = (state = defaultState, action) => {
  let updatedState = { ...state }
  switch (action.type) {
    case DoctorActions.add_patient_success:
      updatedState.patients = [action.payload, ...updatedState.patients]
      break
    case DoctorActions.add_patient_error:
      swal('There was an error in process!')
      break
    case DoctorActions.read_all_patient_success:
      updatedState.patients = action.payload
      break
    case DoctorActions.read_all_patient_error:
      swal('Error: ', action.payload)
  }
  return updatedState
}
