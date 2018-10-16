import React from "react";
import { BrowserRouter, Route,Switch,  } from "react-router-dom";
import Home from "../Home/Home";
import SignUp from "../Forms/signup";
import Login from "../Forms/login";
import Dashboard from "../Dashboard/containers/Dashboard";
class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/loginDoctor"  component={Login} />
                        <Route path="/signUpDoctor"  component={SignUp} />
                        <Route path="/dashboard"  component={Dashboard} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    };
};

export default AppRouter;
