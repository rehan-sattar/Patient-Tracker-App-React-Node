import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "../Home/Home";
import SignUp from "../Forms/signup";
import Login from "../Forms/login";
import Dashboard from "../Dashboard/containers/Dashboard";
export const history = createHistory();
class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/loginDoctor" component={Login} />
                    <Route path="/signUpDoctor" component={SignUp} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        );
    };
};

export default AppRouter;
