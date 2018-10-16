import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyAw5RTa4K5Rv_u6xxv2rJlL5BWw8IH8FN0",
    authDomain: "patient-tracker-app-c8704.firebaseapp.com",
    databaseURL: "https://patient-tracker-app-c8704.firebaseio.com",
    projectId: "patient-tracker-app-c8704",
    storageBucket: "",
    messagingSenderId: "3424726563"
};
firebase.initializeApp(config);
const auth = firebase.auth();
export default auth;