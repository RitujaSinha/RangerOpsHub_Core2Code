import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password || !role) {
      setError("Please fill out all fields and select a role.");
      return;
    }

    // STORE ROLE + EMAIL
    localStorage.setItem("role", role);
    localStorage.setItem("email", email);

    // REDIRECT BY ROLE
    if (role === "admin") navigate("/admin-dashboard");
    if (role === "engineer") navigate("/engineer-dashboard");
    if (role === "ranger") navigate("/ranger-dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
          Login
        </h2>

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 mb-4 bg-gray-800 rounded"
        />

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 mb-4 bg-gray-800 rounded"
        />

        {/* Role */}
        <label>Select Role</label>
        <select
          className="w-full p-2 mb-4 bg-gray-800 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="admin">Admin</option>
          <option value="engineer">Engineer</option>
          <option value="ranger">Ranger</option>
        </select>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button className="w-full p-2 bg-purple-600 rounded">
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          No account?{" "}
          <Link className="text-purple-400 underline" to="/signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
