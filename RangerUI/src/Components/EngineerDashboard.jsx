export default function EngineerDashboard() {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">Engineer Dashboard</h1>
  
        <h2 className="text-2xl font-semibold mb-4">Assigned To You</h2>
  
        <table className="w-full bg-gray-900 rounded-xl overflow-hidden mb-10">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
  
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="p-3">102</td>
              <td className="p-3">Zord Engine Leakage</td>
              <td className="p-3 text-blue-400">IN PROGRESS</td>
            </tr>
  
            <tr>
              <td className="p-3">205</td>
              <td className="p-3">Cooling System Overheating</td>
              <td className="p-3 text-yellow-400">OPEN</td>
            </tr>
          </tbody>
        </table>
  
        <div className="space-x-4">
          <button className="bg-blue-600 px-4 py-2 rounded">Start Work</button>
          <button className="bg-green-600 px-4 py-2 rounded">Resolve</button>
          <button className="bg-gray-600 px-4 py-2 rounded">Add Comment</button>
        </div>
      </div>
    );
  }
  
