import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPatient from "../components/Dashboard/containers/AddPatient";
import AllPatients from "../components/Dashboard/containers/AllPatients";
import SearchPatient from "../components/Dashboard/containers/SearchPatient";
import PatientHistory from "../components/Dashboard/containers/PatientHistory";

class DashboardRouter extends React.Component {
    render() {
        return (
            <div>
            {/* //     <BrowserRouter> */}
            {/* //         <Switch> */}
                        <Route exact path="/dashboard/addPatient" render= { () => <AddPatient />} />
                        <Route path="/dashboard/allPaitents"  component={AllPatients} />
                        <Route path="/dashboard/searchPatient" component={SearchPatient} />
                        <Route path="/dashboard/patientHistory" component={PatientHistory} />
                {/* //     </Switch> */}
                {/* // </BrowserRouter> */}
            </div>
        );
    };
};

export default DashboardRouter;