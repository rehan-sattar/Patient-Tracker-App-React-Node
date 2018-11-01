import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllPatients } from "../../../store/Actions/ActionCreatorsForDoctor";
import './styles.css';

const Example = () => (
  <ReactLoading type="spinningBubbles" color="#000" className="loader" />
);

class AllPatients extends Component {
  constructor() {
    super();
    this.state = {
      users: undefined
    }
  }
  componentDidMount = () => {

    // let doctorId = localStorage.getItem('')
    fetch(`https://swapi.co/api/people`)
      .then(res => res.json())
      .then(users => this.setState({
        users: users.results
      }));
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Welcome to Dashboard!</h1>
          <hr />
          <h1>Your Patients</h1>
        </div>
        {
          this.state.users === undefined ? (<Example />) : (
            <div className="container">              {
              this.state.users.map((user, index) => (
                <div key={index} className="my-1">
                  <div className="card">
                    <div className="card-body">
                      <p> name : {user.name}</p>
                      <p> Height : {user.height}</p>
                      <p> mass: {user.mass}</p>
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
          )
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  downloadAllPatients: () => getAllPatients()
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AllPatients)