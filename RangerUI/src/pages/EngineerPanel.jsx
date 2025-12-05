export default function EngineerPanel() {
    const assigned = [
      { id: 102, title: "Zord Engine Leakage", status: "IN PROGRESS" },
      { id: 205, title: "Cooling System Overheating", status: "OPEN" }
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Assigned To You – Engineer: Billy</h2>
  
        <table className="w-full border mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th>ID</th><th>Title</th><th>Status</th>
            </tr>
          </thead>
  
          <tbody>
            {assigned.map(a => (
              <tr key={a.id} className="border">
                <td>{a.id}</td>
                <td>{a.title}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <div className="mt-6 space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded">Start Work</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Resolve</button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded">Add Comment</button>
        </div>
      </div>
    );
  }
  