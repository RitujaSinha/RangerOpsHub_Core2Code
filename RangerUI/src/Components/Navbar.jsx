import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-gray-900 p-4 flex justify-between">
      <h1 className="text-purple-400 text-2xl font-bold">RangerOpsHub</h1>

      <div className="space-x-4">
        {!role && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin-dashboard">Admin</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}

        {role === "engineer" && (
          <>
            <Link to="/engineer-dashboard">Engineer</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}

        {role === "ranger" && (
          <>
            <Link to="/ranger-dashboard">Ranger</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
