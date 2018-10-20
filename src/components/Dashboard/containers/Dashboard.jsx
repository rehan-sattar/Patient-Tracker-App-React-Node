import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardRouter from '../../dashboardRouter';
import "../styles/dashboard.css"

class Dashboard extends Component {
    openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    render() {
        return (
            <div className="body">
                <div id="mySidenav" className="sidenav">
                    <a href="#" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                    <Link to="/dashboard/allPaitents" className="navLinks" onClick={() => this.closeNav()} > <i className="fa fa-users mx-1"></i>  All patients</Link>
                    <Link to="/dashboard/addPatient" className="navLinks" onClick={() => this.closeNav()} > <i className="fa fa-plus mx-1"></i> Add patients</Link>
                    <Link to="/dashboard/searchPatient" className="navLinks" onClick={() => this.closeNav()} > <i className="fa fa-search mx-1"></i> Search patients</Link>
                    <Link to="/dashboard/doctorProfile" className="navLinks" onClick={() => this.closeNav()} > <i className="fa fa-user mx-1"></i> Profile </Link>
                    
                    <button className="btn btn-outline-info btn-lg"> <i className="fas fa-sign-out-alt"></i> Logout</button>
                </div>

                <header className="bg-dark text-white py-3">
                    <div style={{ fontSize: 20, paddingLeft: '1em', cursor: 'pointer' }} onClick={() => this.openNav()}>
                        &#9776; Menu
                    </div>
                </header>

                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <DashboardRouter />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;