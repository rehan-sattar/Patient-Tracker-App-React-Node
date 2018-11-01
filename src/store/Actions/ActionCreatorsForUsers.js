import auth from "../../firebase";
import { Actions } from "./AllActions";

export const API_ENDPOINT = `http://localhost:8080/doctorDashbord`
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
                        doctor_token: response.user.uid,
                        email: doctorEmail,
                        gender: doctorGender,
                        firstName,
                        lastName
                    })
                })
                    .then(res => res.json())   // register user endpoint
                    .then(user => dispatch({
                        type: Actions.userSignUpSuccess,
                        payload: { user, token: response.user.uid }
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
                    payload: { token: res.user.uid }
                })
            }).catch(err => dispatch({
                type: Actions.userLoginError,
                err
            }))
    };
};

const getUserLogout = () => {
    return dispatch => {
        auth.signOut()
            .then(() => dispatch({ type: Actions.userLogoutSuccess }))
            .catch(err => dispatch({ type: Actions.userLogoutError, payload: err.message }))
    };
};


export {
    getUserSignUp,
    getUserLogin,
    getUserLogout
};
