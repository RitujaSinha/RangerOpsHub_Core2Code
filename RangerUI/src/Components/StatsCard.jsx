export default function StatsCard({ title, value }) {
    return (
      <div className="bg-[#0c1222] border border-purple-500 p-6 rounded-xl w-56 shadow-lg shadow-purple-600/40">
        <h3 className="text-purple-300 text-xl">{title}</h3>
        <p className="text-4xl font-bold mt-2">{value}</p>
      </div>
    );
  }
  