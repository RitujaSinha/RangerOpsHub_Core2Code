import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("");
  const [error, setError] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!role || !email || !password) {
      setError("Please fill all fields and select a role.");
      return;
    }

    setError("");
    alert("Login Successful!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white px-4 ">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-purple-500 drop-shadow-[0_0_10px_rgb(168,85,247)">

        <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* Login Role */}
          <div>
            <label className="block mb-1">Login as</label>
            <select
              className="w-full p-3 rounded bg-black border border-gray-700"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="ranger">Ranger</option>
              <option value="engineer">Engineer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-black border border-gray-700"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-black border border-gray-700"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
            Login
          </button>

          <div className="text-sm text-center mt-3">
            <Link to="/forgot-password" className="text-purple-400 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <p className="text-sm text-center mt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
