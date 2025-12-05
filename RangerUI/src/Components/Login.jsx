import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!role || !email || !password) {
      setError("Please fill all fields and select a role.");
      return;
    }

    // === MOCK AUTH ===
    // In real app call your backend and validate credentials & fetch role/token.
    // For now just store role in localStorage.
    localStorage.setItem("role", role);
    localStorage.setItem("userEmail", email);

    // redirect to the role's home
    if (role === "admin") navigate("/admin");
    else if (role === "engineer") navigate("/engineer");
    else if (role === "ranger") navigate("/ranger");
    else navigate("/");

    // clear error if any
    setError("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white px-4 ">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-purple-500 drop-shadow-[0_0_10px_rgb(168,85,247)]">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm">Email</label>
            <input name="email" type="email" className="w-full mt-1 p-2 rounded bg-gray-800" />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input name="password" type="password" className="w-full mt-1 p-2 rounded bg-gray-800" />
          </div>

          <div>
            <label className="block text-sm">Role</label>
            <select value={role} onChange={e=>setRole(e.target.value)} className="w-full mt-1 p-2 rounded bg-gray-800">
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="engineer">Engineer</option>
              <option value="ranger">Ranger</option>
            </select>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button type="submit" className="w-full py-2 rounded bg-purple-600 text-white">Login</button>

          <p className="text-sm text-center mt-2">
            Don't have an account? <Link to="/signup" className="text-purple-400 hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
