import { useState } from "react";

export default function Loginforms() {
  const [formdata, setformdata] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const [name, value] = e.target;
    setformdata(
      (prevdata = (e) => ({
        ...prevdata,
        [name]: value,
      }))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        className="bg-white p-4 rounded shadow"
        onSubmit={handleSubmit} // Attach the submit handler
      >
        <h1 className="h4 mb-4 fw-bold text-center">Login</h1>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formdata.email} // Bind value to state
            onChange={handleChange} // Attach change handler
            className="form-control"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formdata.password} // Bind value to state
            onChange={handleChange} // Attach change handler
            className="form-control"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
