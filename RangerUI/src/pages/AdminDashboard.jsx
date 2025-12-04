import { Routes, Route } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar.jsx";
import StatsCard from "../Components/StatsCard.jsx";
import IncidentTable from "../Components/IncidentTable.jsx";

function DashboardHome() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-purple-400">Dashboard Overview</h1>

      <div className="flex gap-6 mt-8">
        <StatsCard title="Total Issues" value={42} />
        <StatsCard title="Open Issues" value={18} />
        <StatsCard title="Resolved" value={12} />
        <StatsCard title="SLA Breached" value={4} />
      </div>
    </div>
  );
}

function Incidents() {
  return (
    <div className="p-10">
      <h1 className="text-3xl text-purple-400">Active Incidents</h1>
      <IncidentTable
        rows={[
          { id: 1, title: "Server Down", status: "Open", engineer: "Alex", sla: "4 hrs" },
          { id: 2, title: "API Failure", status: "Resolved", engineer: "Rituja", sla: "2 hrs" },
        ]}
      />
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AdminNavbar />

      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/incidents" element={<Incidents />} />
        {/* Add more admin sub-pages here */}
      </Routes>
    </div>
  );
}

