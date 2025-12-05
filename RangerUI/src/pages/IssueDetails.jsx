import { useParams } from "react-router-dom";

export default function IssueDetails() {
  const { id } = useParams();

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Issue #{id} – Cooling System Overheating</h2>

      <p><strong>Status:</strong> OPEN</p>
      <p><strong>Assigned Engineer:</strong> None</p>
      <p><strong>Priority:</strong> HIGH</p>
      <p><strong>SLA:</strong> 3 hours remaining</p>

      <p className="border p-3 rounded">
        "The Zord cooling chamber is overheating after 10 minutes of runtime."
      </p>

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-indigo-500 text-white rounded">Assign Engineer</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded">Change Status</button>
      </div>

      <div className="mt-6">
        <h3 className="font-bold mb-2">Comments</h3>
        <div className="border p-3 rounded mb-2">Billy: "Looking into this."</div>
        <div className="border p-3 rounded mb-2">Trini: "Need more logs."</div>

        <textarea className="w-full border p-2 rounded" placeholder="Add comment"></textarea>
        <button className="px-4 py-2 bg-blue-500 text-white rounded mt-2">Post</button>
      </div>
    </div>
  );
}
