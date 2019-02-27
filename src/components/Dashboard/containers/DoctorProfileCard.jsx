import React, { Component } from 'react'

export default class DoctorProfileCard extends Component {
    render() {
        return (
            <div>
                  <div className="container">
                    <section className="doctorProfile">
                       <div className="row  align-items-center">
                            <div className="col-md-4 col-lg-4 col-sm-12">
                            <img
                                    className="text-center"
                                    src={require('../../../assets/doctorImage.jpeg')} 
                                    alt="doctor_image"
                                    height='300px'
                                    width='300px'
                                    style={{ borderRadius : '100%', border: '3px solid red' }}
                                    />
                            </div>
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <h2>Your profile</h2>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>Doctor a</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>Doctor email</td>
                                    </tr>
                                    <tr>
                                        <td>Gander</td>
                                        <td>gender </td>
                                    </tr>
                                    <tr>
                                        <td>Degrees</td>
                                        <td>Doctor Degrees</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                       </div>
                    </section>
                </div>
            </div>
        )
    }
}
