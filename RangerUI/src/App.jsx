import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import ForgotPassword from "./Components/ForgotPassword.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminNavbar from "./Components/AdminNavbar.jsx";
import StatsCard from "./Components/StatsCard.jsx";
import IncidentTable from "./Components/IncidentTable.jsx";

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
