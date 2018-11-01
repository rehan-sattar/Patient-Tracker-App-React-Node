import React from "react";
import {Route} from "react-router-dom";
import AddPatient from "../components/Dashboard/containers/AddPatient";
import AllPatients from "../components/Dashboard/containers/AllPatients";
import SearchPatient from "../components/Dashboard/containers/SearchPatient";
import PatientHistory from "../components/Dashboard/containers/PatientHistory";
import DoctorProfile from '../components/Dashboard/containers/DoctorProfile';
import DoctorProfileCard from "../components/Dashboard/containers/DoctorProfileCard";

class DashboardRouter extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/dashboard/" render={() => <AllPatients />} />
                <Route exact path="/dashboard/addPatient" render={() => <AddPatient />} />
                <Route path="/dashboard/allPaitents" component={AllPatients} />
                <Route path="/dashboard/searchPatient" component={SearchPatient} />
                <Route path="/dashboard/patientHistory" component={PatientHistory} />
                <Route path="/dashboard/doctorProfile" component={DoctorProfileCard} />
            </div>
        );
    };
};

export default DashboardRouter;