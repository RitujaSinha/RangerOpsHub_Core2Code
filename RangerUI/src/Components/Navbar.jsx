import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(()=> {
    setRole(localStorage.getItem("role"));
  }, []);

  const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("userEmail");
    setRole(null);
    navigate("/login");
  };

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide text-purple-400">RangerOPSHUB</h1>

      <div className="space-x-4">
        {!role && (
          <>
            <Link to="/login">
              <button className="px-4 py-2 rounded-xl bg-purple-600">Login</button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 rounded-xl border border-purple-400">Signup</button>
            </Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin"><button className="px-4 py-2 rounded-xl bg-purple-600">Admin</button></Link>
            <button onClick={logout} className="px-4 py-2 rounded-xl border">Logout</button>
          </>
        )}

        {role === "engineer" && (
          <>
            <Link to="/engineer"><button className="px-4 py-2 rounded-xl bg-purple-600">Engineer</button></Link>
            <button onClick={logout} className="px-4 py-2 rounded-xl border">Logout</button>
          </>
        )}

        {role === "ranger" && (
          <>
            <Link to="/ranger"><button className="px-4 py-2 rounded-xl bg-purple-600">Ranger</button></Link>
            <button onClick={logout} className="px-4 py-2 rounded-xl border">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
