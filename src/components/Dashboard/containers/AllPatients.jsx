import React, { Component } from 'react'

import ReactLoading from 'react-loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllPatients } from '../../../store/Actions/ActionCreatorsForDoctor'
import './styles.css'
import PatientCard from './PatientCard'

const Example = () => (
  <ReactLoading type='spinningBubbles' color='#000' className='loader' />
)

class AllPatients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prevProps: props,
      patients: undefined
    }
  }
  componentDidMount = () => {
    this.props.downloadAllPatients()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevProps !== nextProps) {
      console.log(nextProps.patientReducer.patients)
      return {
        patients: nextProps.patientReducer.patients
      }
    }

    return null
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h1>Welcome to Dashboard!</h1>
          <hr />
          <h1>Your Patients</h1>
        </div>
        {this.state.patients === undefined ? (
          <Example />
        ) : (
          <PatientCard patients={this.state.patients} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  patientReducer: state.patientReducer
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
