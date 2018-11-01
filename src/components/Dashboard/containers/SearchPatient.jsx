import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import "./styles.css";

export default class SearchPatient extends Component {
  constructor() {
    super();
    this.state = {
      showDateForm: false,
      showNameForm: false,

    }
  }
  render() {

    let dateForm = (
      <form>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text bg-dark text-white">
          <i className="far fa-calendar-alt"></i>
          </span>
        </div>
        <input type="date" className="form-control" placeholder="Date of Appointment" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </form>
    );

    let nameForm = (
      <form>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-dark text-white">
              <i className="fas fa-sort-alpha-down"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Patient Name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </form>

    );
    return (
      <div>
        <div className="container">
          <h1>Welcome to Dashboard!</h1>
          <hr />
          <h1 className="text-center"> Search Patients </h1>
          <section className="my-5">
            <div className="row justify-content-center">
              <div className="col-md-4 col-lg-4 col-sm-12 mb-1">
                <Link to="/dashboard/searchPatient/byDate" className="routeLinks">
                  <button className="btn btn-outline-dark btn-block">
                    <i className="far fa-calendar-alt"></i> By Date
                  </button>
                </Link>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12">
                <Link to="/dashboard/searchPatient/byName" className="routeLinks">
                  <button className="btn btn-outline-dark btn-block">
                    <i className="fas fa-sort-alpha-down"></i>  By Name
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <div className="row justify-content-center">
            <div className="col-md-5 col-lg-5 col-sm-5">
              <Route exact path="/dashboard/searchPatient/byName" render={() => nameForm} />
              <Route path="/dashboard/searchPatient/byDate" render={() => dateForm} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
