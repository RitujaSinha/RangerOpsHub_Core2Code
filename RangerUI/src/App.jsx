import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import ForgotPassword from "./Components/ForgotPassword";

import AdminDashboard from "./Components/AdminDashboard.jsx";
import EngineerDashboard from "./Components/EngineerDashboard.jsx";
import RangerDashboard from "./Components/RangerDashboard.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
                  <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />


        <Route
          path="/engineer"
          element={
            <ProtectedRoute allowedRoles={["engineer"]}>
              <EngineerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ranger"
          element={
            <ProtectedRoute allowedRoles={["ranger"]}>
              <RangerDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
