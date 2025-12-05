import React from "react";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">Welcome, Admin</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 p-4 rounded-lg shadow">Total Issues: 42</div>
        <div className="bg-gray-900 p-4 rounded-lg shadow">Open Issues: 18</div>
        <div className="bg-gray-900 p-4 rounded-lg shadow">Resolved: 12</div>
        <div className="bg-gray-900 p-4 rounded-lg shadow">SLA Breached: 4</div>
      </div>

      {/* Placeholder for charts and table */}
      <div className="bg-gray-900 p-6 rounded-lg shadow">
        <p className="text-gray-300">Charts and active incidents table go here.</p>
      </div>
    </div>
  );
}
