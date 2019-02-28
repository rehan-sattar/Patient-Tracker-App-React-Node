import React, { Component } from "react"

import ReactLoading from "react-loading"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getAllPatients } from "../../../store/Actions/ActionCreatorsForDoctor"
import "./styles.css"
import PatientCard from "./PatientCard"

const Example = () => (
  <ReactLoading type="spinningBubbles" color="#000" className="loader" />
)

class AllPatients extends Component {
  componentDidMount = () => {
    this.props.downloadAllPatients()
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Welcome to Dashboard!</h1>
          <hr />
          <h1>Your Patients</h1>
        </div>
        {console.log(this.props.patients)}
        {this.props.patients === undefined ? (
          <Example />
        ) : this.props.patients.length === 0 ? (
          <p>No Patients in you list! </p>
        ) : (
          <PatientCard patients={this.props.patients} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  patients: state.patientReducer.patients
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      downloadAllPatients: () => getAllPatients()
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPatients)
