import auth from "../../firebase";
import { Actions } from "./AllActions";

const API_ENDPOINT = `http://localhost:8080/doctorDashbord`
const getUserSignUp = ({ doctorEmail, doctorPassword, doctorGender, firstName, lastName }) => {
    console.log('iiii')
    return dispatch => {
        auth.createUserWithEmailAndPassword(doctorEmail, doctorPassword)
            .then(response => {
                fetch(`${API_ENDPOINT}/registerDoctor`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    body: JSON.stringify({
                        email: doctorEmail,
                        gender: doctorGender,
                        firstName,
                        lastName
                    })
                })
                    .then(res => res.json())   // register user endpoint
                    .then(user => dispatch({
                        type: Actions.usreSignUpSuccess,
                        payload: {  user , token : response.uid}
                    })).catch(err => dispatch({
                        type: Actions.usreSignUpError,
                        err
                    }))
            }).catch(err => dispatch({
                type: Actions.usreSignUpError,
                err
            }));
    };
};

const getUserLogin = ({ email, password }) => {
    return dispatch => {
        console.log('inside getr user login');
        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                dispatch({
                    type: Actions.userLoginSuccess,
                    payload: res
                })
            }).catch(err => dispatch({
                type: Actions.userLoginError,
                err
            }))
    };
};

export {
    getUserSignUp,
    getUserLogin
};
