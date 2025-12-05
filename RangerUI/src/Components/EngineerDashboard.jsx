import React, { useState } from "react";

const sampleAssigned = [
  { id: 102, title: "Zord Engine Leakage", status: "IN PROGRESS" },
  { id: 205, title: "Cooling System Overheating", status: "OPEN" },
];

export default function EngineerDashboard() {
  const [tasks, setTasks] = useState(sampleAssigned);

  const startWork = (id) =>
    setTasks((prev) => prev.map(t => t.id===id ? {...t, status: "IN PROGRESS"} : t));

  const resolve = (id) =>
    setTasks((prev) => prev.map(t => t.id===id ? {...t, status: "RESOLVED"} : t));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">Assigned To You – Engineer</h1>

      <div className="bg-gray-900 p-4 rounded-lg shadow mb-6">
        <table className="w-full text-left">
          <thead>
            <tr><th>ID</th><th>Title</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {tasks.map(t => (
              <tr key={t.id} className="border-t border-gray-800">
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.status}</td>
                <td className="space-x-2">
                  <button onClick={() => startWork(t.id)} className="px-2 py-1 rounded bg-purple-600">Start Work</button>
                  <button onClick={() => resolve(t.id)} className="px-2 py-1 rounded bg-green-600">Resolve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
