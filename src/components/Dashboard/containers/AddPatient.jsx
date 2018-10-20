
import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class AddPatient extends Component {
  constructor() {
    super();
    this.state = {
      patientFullName: '',
      patientAge: undefined,
      patientDiseas: '',
      medicationProvided: '',
      dateOfArrival: undefined
    }

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Welcome to Dashboard!</h1>
          <hr />
          <h1 className="text-center"> Add Patients </h1>
        </div>
        <section className="my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <form onSubmit={this.submitHandler}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="full name"
                    value={this.state.patientFullName}
                    onChange={(e) => this.setState({ patientFullName: e.target.value })}
                  />
                  <br />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Age"
                    value={this.state.patientAge}
                    onChange={(e) => this.setState({ patientAge: e.target.value })}
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Diseas"
                    value={this.state.patientDiseas}
                    onChange={(e) => this.setState({ patientDiseas: e.target.value })}
                  />
                  <br />
                  <textarea
                    className="form-control"
                    placeholder="Madications, (saperate by comma )"
                    value={this.state.medicationProvided}
                    onChange={(e) => this.setState({ medicationProvided: e.target.value })}
                  ></textarea>

                  <br />
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date of Arrivla"
                    value={this.state.dateOfArrival}
                    onChange={(e) => this.setState({ dateOfArrival: e.target.value })}
                  />
                  <br />
                  <button className="btn btn-outline-dark btn-block"> <h5> <i className="fa fa-plus"></i> Add</h5></button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  // bindActionCreators({
  //   addPatientRequest : () => 
  // }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(AddPatient) 