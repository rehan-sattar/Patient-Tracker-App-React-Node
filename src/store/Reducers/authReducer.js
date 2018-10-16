import { Actions } from "../Actions/AllActions";
let defaultState = {
    user: null,
    authToken: null
};

const Authreducer = (state = defaultState, action) => {
    let newState = { ...state };
    switch (action.type) {
        // signup actions
        case Actions.usreSignUpSuccess:
            console.log('inside Action.signupsuccess');
            newState.user = action.payload.user;
            newState.authToken = action.payload.token;
        case Actions.usreSignUpError:
            return newState;
        // login actions
        case Actions.userLoginSuccess:

            newState.user = action.payload;
            newState.authToken = action.payload.user.uid;
            console.log(newState)
            break;
        case Actions.userloginError:
            return newState;
    };
    return newState;
};

export default Authreducer;


