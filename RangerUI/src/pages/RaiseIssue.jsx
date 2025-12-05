export default function RaiseIssue() {
    return (
      <div className="max-w-xl mx-auto p-6 space-y-4">
        <h2 className="text-2xl font-bold">Raise a New Facility Issue</h2>
  
        <input type="text" placeholder="Title" className="w-full border p-2 rounded"/>
  
        <select className="w-full border p-2 rounded">
          <option>Sensors</option>
          <option>Zord</option>
          <option>Power</option>
        </select>
  
        <select className="w-full border p-2 rounded">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>
  
        <textarea className="w-full border p-2 rounded" rows="4" placeholder="Description"></textarea>
  
        <input type="file" className="w-full border p-2 rounded" />
  
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full">
          Submit Issue
        </button>
      </div>
    );
  }
  