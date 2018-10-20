import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './styles.css';

const Example = () => (
  <ReactLoading type="spinningBubbles" color="#000" className="loader" />
);

export default class AllPatients extends Component {
  constructor() {
    super();
    this.state = {
      users: undefined
    }
  }
  componentDidMount = () => {
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