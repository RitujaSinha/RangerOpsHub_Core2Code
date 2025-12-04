import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="p-4 bg-gray-900 flex gap-4">
      <Link to="/admin">Dashboard</Link>
      <Link to="/admin/incidents">Incidents</Link>
    </nav>
  );
}
