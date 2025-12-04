import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [role, setRole] = useState("");
  const [engineerType, setEngineerType] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!role || !name || !email || !password) {
      setError("Please fill all required fields.");
      return;
    }

    if (role === "engineer" && !engineerType) {
      setError("Please select your Engineer Type.");
      return;
    }

    setError("");
    alert("Sign-up successful!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-purple-500 ">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Role Selection */}
          <div>
            <label className="block mb-1">Sign up as</label>
            <select
              className="w-full p-3 rounded bg-black border border-gray-700"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="ranger">Ranger</option>
              <option value="engineer">Engineer</option>
            </select>
          </div>

          {/* Engineer Type if role = engineer */}
          {role === "engineer" && (
            <div>
              <label className="block mb-1">Engineer Type</label>
              <select
                className="w-full p-3 rounded bg-black border border-gray-700"
                value={engineerType}
                onChange={(e) => setEngineerType(e.target.value)}
              >
                <option value="">Select Engineer Type</option>
                <option value="software">Software Engineer</option>
                <option value="mechanical">Mechanical Engineer</option>
                <option value="electrical">Electrical Engineer</option>
                <option value="civil">Civil Engineer</option>
                <option value="robotics">Robotics Engineer</option>
                <option value="ai-ml">AI/ML Engineer</option>
                <option value="embedded">Embedded Systems Engineer</option>
                <option value="network">Network Engineer</option>
                <option value="cybersecurity">Cyber-Security Engineer</option>
                <option value="systems">Systems Engineer</option>
                <option value="hardware">Hardware Engineer</option>
                <option value="qa">Quality Assurance Engineer</option>
                <option value="devops">DevOps Engineer</option>
                <option value="aerospace">Aerospace Engineer</option>
                <option value="automotive">Automotive Engineer</option>
                <option value="chemical">Chemical Engineer</option>
              </select>
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-black border border-gray-700"
          />

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
            Sign Up
          </button>

          <p className="text-sm text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
