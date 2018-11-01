import  { API_ENDPOINT }  from "./ActionCreatorsForUsers";

export const getAllPatients = () => {
    return dispatch => {
        let id = localStorage.getItem('doctor_id');
        fetch(`${API_ENDPOINT}/addPatient/${id}`)
            .then( res => res.json())
            .then( patient => console.log(patient))
            .catch( err => console.log('Error: ',err))
    }
}


export const addPatient = () => {
    return dispatch => {
        let id = localStorage.getItem('doctor_id');
        fetch(`${API_ENDPOINT}/addPatient/${id}` , {
            method: 'POST',
            headers : {
                'Content-Type' : 'Application/json'
            },
            body : JSON.stringify({

            })
        })
            .then( res => res.json())
            .then( patient => console.log(patient))
            .catch( err => console.log('Error: ',err))
    }
}