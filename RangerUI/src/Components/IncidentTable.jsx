export default function IncidentTable({ rows }) {
    return (
      <table className="w-full mt-6 border border-purple-600 rounded-lg overflow-hidden text-white">
        <thead className="bg-[#0c1222] text-purple-300">
          <tr>
            <th className="p-3 border border-purple-700">ID</th>
            <th className="p-3 border border-purple-700">Title</th>
            <th className="p-3 border border-purple-700">Status</th>
            <th className="p-3 border border-purple-700">Engineer</th>
            <th className="p-3 border border-purple-700">SLA</th>
          </tr>
        </thead>
  
        <tbody className="bg-black">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-purple-900/20 transition">
              <td className="p-3 border border-purple-800">{row.id}</td>
              <td className="p-3 border border-purple-800">{row.title}</td>
              <td className="p-3 border border-purple-800">{row.status}</td>
              <td className="p-3 border border-purple-800">{row.engineer}</td>
              <td className="p-3 border border-purple-800">{row.sla}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  