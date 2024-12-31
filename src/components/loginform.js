
import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error on each attempt

    // Fetch users from JSONPlaceholder
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Match username and email
    const user = users.find(
      (u) => u.username === formData.username && u.email === formData.email
    );

    if (user) {
      onLogin(user); // Call parent function to pass user data
    } else {
      setError("Invalid username or email");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="bg-white p-4 rounded shadow" onSubmit={handleSubmit}>
        <h1 className="h4 mb-4 fw-bold text-center">Login</h1>

        {error && <p className="text-danger text-center">{error}</p>}

        {/* Username Input */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
}
