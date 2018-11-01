import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from "./store/store";
import './index.css';
import auth from "./firebase";
import { history } from "./components/Routes/AppRouter";

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('logged in!');
        if( history.location.pathname === '/' || 
            history.location.pathname === '/signUpDoctor' || 
            history.location.pathname === '/loginDoctor') {
            history.push('/dashboard');
        }
    } else {
        console.log('logged out!');
        history.push('/');
    }
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

