import React from "react";
import { Link } from "react-router-dom";


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    render() {
        return (
            <div>
                <section className="container my-5">
                    <h1 className="diplsay-4 text-center mb-4 formHeading"> <i className="fa fa-user"></i> Login </h1>
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            <form>
                                <input
                                    type="text"
                                    placeholder="Email: example@gmail.com"
                                    className="form-control"
                                    required
                                    onChange={(e) => this.setState({ email: e.target.value })} /> <br />
                                <input
                                    type="password"
                                    placeholder="password: ********"
                                    className="form-control"
                                    required
                                    onChange={(e) => this.setState({ password: e.target.value })} /> <br />

                                <button className="btn btn-outline-info btn-block">Login <i className="fa fa-arrow-right"></i></button>
                                <br />                                
                                <Link to="/"><button className="btn btn-outline-info btn-block"> <i className="fa fa-arrow-left"></i> Back</button></Link>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};

export default Login;