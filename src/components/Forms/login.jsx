import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserLogin } from "../../store/Actions/ActionCreators";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevProps: props,
            email: '',
            password: ''
        };
        this.submitHandler = this.submitHandler.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.prevProps !== nextProps) {
            nextProps.history.push('/dashboard');
            return {};
        }
        return null;
    };


    submitHandler(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.getUserLoginAttempt(this.state);
        this.setState({
            email: '',
            password: ''
        });
    };
    render() {
        return (
            <div>
                <section className="container my-5">
                    <h1 className="diplsay-4 text-center mb-4 formHeading"> <i className="fa fa-user"></i> Login </h1>
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            <form onSubmit={this.submitHandler}>
                                <input
                                    type="text"
                                    placeholder="Email: example@gmail.com"
                                    className="form-control"
                                    required
                                    value={this.state.email}
                                    onChange={(e) => this.setState({ email: e.target.value })} /> <br />
                                <input
                                    type="password"
                                    placeholder="password: ********"
                                    className="form-control"
                                    required
                                    value={this.state.password}
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

const mapStateToProps = (state) => ({
    authstate: state
});
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUserLoginAttempt: (state) => getUserLogin(state)
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);