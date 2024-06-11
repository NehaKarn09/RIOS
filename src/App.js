import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import HospitalOwnerRegistration from "./pages/registerPage/RegisterPage";
import CompleteHospitalDetails from "./pages/completeHospitalDetails/CompleteHospitalDetails";
import Navbar from "./components/navbar/Navbar";
import HospitalProfileCompletion from "./pages/dashboardPage/hospitalOwnerDashboard/HospitalOwnerDashboard";
import DoctorDashboard from "./pages/dashboardPage/doctorDashboard/DoctorDashboard";
import StaffDashboard from "./pages/dashboardPage/staffDashboard/StaffDashboard";
import PatientRegistration from "./components/registerPatient/registerPatient";
import LoginPage from "./pages/loginPage/LoginPage";

import RegisterNewStaff from "./components/registerNewStaff/registerNewStaff";
import PatientMonitoringPage from "./pages/patientMonitoringPage/PatientMonitoringPage";
import PatientDetails from "./components/PatientDetails/patientDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="h-[9vh]">
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
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/staff-dashboard" element={<StaffDashboard />} />
            <Route
              path="/register-new-patient"
              element={<PatientRegistration />}
            />
            <Route path="/register-new-staff" element={<RegisterNewStaff />} />
            <Route
              path="/monitor-patient"
              element={<PatientMonitoringPage />}
            />
            <Route
              path="/monitor-patient-details/:id"
              element={<PatientDetails />}
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
