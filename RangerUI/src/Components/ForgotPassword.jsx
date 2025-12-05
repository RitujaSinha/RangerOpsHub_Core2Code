import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setError("");
    setMessage("Password reset link has been sent to your email.");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white px-4">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md border border-purple-500">

        <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">
          Forgot Password
        </h2>

        <p className="text-gray-400 text-center mb-4">
          Enter the email associated with your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded bg-black border border-gray-700"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-400 text-sm">{message}</p>}

          <button className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
            Send Reset Link
          </button>

          <p className="text-sm text-center mt-2">
            Remember your password?{" "}
            <Link to="/login" className="text-purple-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
