import { Link } from "react-router-dom";

export default function IssueList() {
  const issues = [
    { id: 205, title: "Cooling System Overheating", status: "OPEN", engineer: "-", priority: "High" },
    { id: 206, title: "Command Center Console Lag", status: "IN PROGRESS", engineer: "Zack", priority: "Medium" },
    { id: 207, title: "Ranger Communicator Static", status: "RESOLVED", engineer: "Billy", priority: "Low" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Issues</h2>

      <div className="flex gap-3 mb-4">
        <select className="border p-2 rounded"><option>Status</option></select>
        <select className="border p-2 rounded"><option>Priority</option></select>
        <select className="border p-2 rounded"><option>Category</option></select>
        <input className="border p-2 rounded flex-1" placeholder="Search"/>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th>ID</th><th>Title</th><th>Status</th><th>Engineer</th><th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(i => (
            <tr key={i.id} className="border hover:bg-gray-50">
              <td>{i.id}</td>
              <td><Link to={`/issues/${i.id}`} className="text-blue-600">{i.title}</Link></td>
              <td>{i.status}</td>
              <td>{i.engineer}</td>
              <td>{i.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
