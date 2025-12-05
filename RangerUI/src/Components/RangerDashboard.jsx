export default function RangerDashboard() {
    return (
      <div className="p-8">
  
        <h1 className="text-4xl font-bold mb-8">Raise a New Facility Issue</h1>
  
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl max-w-xl">
  
          <div>
            <label className="text-gray-300">Title</label>
            <input className="w-full p-2 bg-gray-800 rounded" />
          </div>
  
          <div>
            <label className="text-gray-300">Category</label>
            <select className="w-full p-2 bg-gray-800 rounded">
              <option>Sensors</option>
              <option>Zord</option>
              <option>Power</option>
            </select>
          </div>
  
          <div>
            <label className="text-gray-300">Priority</label>
            <select className="w-full p-2 bg-gray-800 rounded">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>
  
          <div>
            <label className="text-gray-300">Description</label>
            <textarea className="w-full p-2 bg-gray-800 rounded h-28" />
          </div>
  
          <button className="bg-red-600 px-6 py-3 rounded text-xl">
            Submit Issue
          </button>
  
        </div>
      </div>
    );
  }
  