import React, { Component } from 'react'


export default class PatientCard extends Component {
  render() {
    return (
      <div >
        {
          <div className="container">              {
            this.props.patients.map((patient, index) => (
              <div key={index} className="my-1">
                <div className="card">
                  <div className="row p-2 justify-content-around">
                    <div className="col-md-3 text-center">
                      <img src={require('../../../assets/patient.png')} height="150px" width="150px" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <p> Name : {patient.patientFullName}</p>
                        <p> Age : {patient.patientAge}</p>
                        <p> Gender: {patient.gender}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-outline-dark mx-1"> <i class="fas fa-notes-medical"></i> History</button>
                    <button data-toggle="modal" data-target="#addDeveloperModal" className="btn btn-outline-success mx-1"> <i className="fa fa-plus"></i> New Appoitment</button>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        }

        {/*  modal for adding a new appintment  */}

        <div className="modal fade" id="addDeveloperModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-dark text-white">
                <div className="modal-title">
                  <h5> <i className="fa fa-plus"></i> Add Appointment</h5>
                </div>
              </div>
              <form id="addDeveleporForm">
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Enter Desease"
                  />
                  <br />
                  <input
                    className="form-control form-control-sm"
                    type="date" />
                  <br />
                  <textarea
                    className="form-control form-control"
                    placeholder="madication"
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-outline-primary"> <i className="fa fa-plus"></i> Add</button>
                  <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
