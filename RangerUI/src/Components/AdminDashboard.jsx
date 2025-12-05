import React from "react";

export default function AdminDashboard() {
  return (
    <div className="p-8">

      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">Welcome, Admin</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Total Issues</h2>
          <p className="text-3xl font-bold mt-2">42</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Open Issues</h2>
          <p className="text-3xl font-bold mt-2 text-yellow-400">18</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Resolved</h2>
          <p className="text-3xl font-bold mt-2 text-green-400">12</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">SLA Breached</h2>
          <p className="text-3xl font-bold mt-2 text-red-400">4</p>
        </div>
      </div>

      {/* Placeholder Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-900 p-6 rounded-xl h-60 flex items-center justify-center">
          <p className="opacity-50">Pie Chart Placeholder</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl h-60 flex items-center justify-center">
          <p className="opacity-50">Line Graph Placeholder</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl h-60 flex items-center justify-center">
          <p className="opacity-50">Bar Graph Placeholder</p>
        </div>
      </div>

      {/* Table */}
      <h2 className="text-2xl font-bold mb-4">Active Incidents</h2>

      <table className="w-full bg-gray-900 rounded-xl overflow-hidden">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Engineer</th>
            <th className="p-3 text-left">SLA</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-700">
            <td className="p-3">101</td>
            <td className="p-3">Teleport Pad Failure</td>
            <td className="p-3 text-yellow-400">OPEN</td>
            <td className="p-3">-</td>
            <td className="p-3">2 hrs</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-3">102</td>
            <td className="p-3">Zord Engine Leakage</td>
            <td className="p-3 text-blue-400">IN PROGRESS</td>
            <td className="p-3">Billy</td>
            <td className="p-3">1 hr</td>
          </tr>
          <tr>
            <td className="p-3">103</td>
            <td className="p-3">Door Sensor Not Opening</td>
            <td className="p-3 text-yellow-400">OPEN</td>
            <td className="p-3">Trini</td>
            <td className="p-3">5 hrs</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
