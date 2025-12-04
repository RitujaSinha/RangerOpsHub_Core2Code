import React from "react";
 import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide text-purple-400">
        RangerOPSHUB
      </h1>

      <div className="space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="px-4 py-2 rounded-xl border border-purple-400 hover:bg-purple-700 transition text-white">
            Signup
          </button>
        </Link>
      </div>
    </nav>
  );
}
