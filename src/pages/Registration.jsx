import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    course: "",
    college: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.rollNo ||
      !formData.course ||
      !formData.college ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="registration-page">
      <div className="registration-box">
        <h1>Student Placement Dashboard</h1>
        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Roll Number</label>
          <input
            type="text"
            name="rollNo"
            placeholder="Enter your roll number"
            value={formData.rollNo}
            onChange={handleChange}
          />

          <label>Course</label>
          <input
            type="text"
            name="course"
            placeholder="Enter your course"
            value={formData.course}
            onChange={handleChange}
          />

          <label>College</label>
          <input
            type="text"
            name="college"
            placeholder="Enter your college"
            value={formData.college}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;