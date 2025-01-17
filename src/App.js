import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import HospitalOwnerRegistration from "./pages/registerPage/RegisterPage";
import CompleteHospitalDetails from "./pages/completeHospitalDetails/CompleteHospitalDetails";
import Navbar from "./components/navbar/Navbar";
import HospitalProfileCompletion from "./pages/dashboardPage/hospitalOwnerDashboard/HospitalOwnerDashboard";
import DoctorDashboard from "./pages/dashboardPage/doctorDashboard/DoctorDashboard";
import StaffDashboard from "./pages/dashboardPage/staffDashboard/StaffDashboard";
import AdminDashboard from "./pages/dashboardPage/adminDashboard/AdminDashboard";
import PatientRegistration from "./components/registerPatient/registerPatient";
import LoginPage from "./pages/loginPage/LoginPage";
import UpdateAdminDetail from "./pages/updateAdminDetail/UpdateAdminDetail";
import StaffList from "./pages/staffList/StaffList";
import DoctorList from "./pages/doctorList/DoctorList";
import PatientList from "./pages/patientList/PatientList";
import UpdateOwnerDetail from "./pages/updateOwnerDetail/UpdateOwnerDetail";
import MonitoringGraph from "./components/monitoringGraph/MonitoringGraph";

import RegisterNewStaff from "./components/registerNewStaff/registerNewStaff";
import PatientMonitoringPage from "./pages/patientMonitoringPage/PatientMonitoringPage";

import HospitalOwnerList from "./pages/entityList/hospitalOwnerList/HospitalOwnerList";
// import DoctorList from "./pages/entityList/doctorList/DoctorList";
// import StaffList from "./pages/entityList/staffList/StaffList";
// import PatientList from "./pages/entityList/patientList/PatientList";
import MonitorPatientList from "./pages/entityList/monitorPatientList/MonitorPatientList";
import UriosDetails from "./components/UriosDetails/uriosDetails";
import FloriosDetails from "./components/FloriosDetails/floriosDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        <nav className="h-[9vh] z-20">
          <Navbar />
        </nav>

        <main className="flex-grow h-[90vh]">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<HospitalOwnerRegistration />} />
            <Route
              path="/complete-hospital-details"
              element={<CompleteHospitalDetails />}
            />
            <Route
              path="/hospital-owner-dashboard"
              element={<HospitalProfileCompletion />}
            />
            <Route
              path="/update-owner-detail"
              element={<UpdateOwnerDetail />}
            />

            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/staff-dashboard" element={<StaffDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route
              path="/update-admin-detail"
              element={<UpdateAdminDetail />}
            />

            <Route
              path="/hospital-owner-detail"
              element={<HospitalOwnerList />}
            />
            <Route path="/doctor-detail" element={<DoctorList />} />
            <Route path="/staff-detail" element={<StaffList />} />
            <Route path="/patient-detail" element={<PatientList />} />
            <Route
              path="/monitor-patient-detail"
              element={<MonitorPatientList />}
            />

            <Route
              path="/register-new-patient"
              element={<PatientRegistration />}
            />
            <Route path="/register-new-staff" element={<RegisterNewStaff />} />
            <Route
              path="/monitor-patient"
              element={<PatientMonitoringPage />}
            />
            <Route path="/monitor-patient-details/:id" element={<MonitoringGraph/>} />

            <Route path="/staff-list" element={<StaffList />} />
            <Route path="/doctor-list" element={<DoctorList />} />
            <Route path="/patient-list" element={<PatientList />} />

            <Route
              path="/urios-patient-details/:id"
              element={<UriosDetails />}
            />
            <Route
              path="/florios-patient-details/:id"
              element={<FloriosDetails />}
            />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
/* <Route path="/hospital-owner-dashboard" element={<HospitalOwnerDashboard />} />
           
            <Route path="/staff-dashboard" element={<StaffDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/profile-completion" element={<ProfileCompletionPage />} />
            <Route path="/patient-registration" element={<PatientRegistrationPage />} />
            <Route path="/patient-monitoring" element={<PatientMonitoringPage />} /> */
