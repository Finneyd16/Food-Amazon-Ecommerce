import React, { useState } from "react";
import P43 from "../assets/P43.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async () => {
    if (!agreedToTerms) {
      setError("Please agree to the Terms and Privacy Policy");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:3001/api/fooddocuments/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Success! Go to login page
      alert("Registration successful! Please login.");
      navigate("/Login");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="register"
      style={{ display: "flex", gap: "5rem", alignItems: "center" }}
    >
      <img
        className="register-image"
        style={{ height: "100vh", width: "50%" }}
        src={P43}
        alt=""
      />
      <div className="register-form-wrapper d-flex flex-column">
        <h3
          className="register-title"
          style={{
            fontFamily: "MD Nichrome Test",
            color: "#00A859",
            fontWeight: "bold",
          }}
        >
          Sign up
        </h3>
        <span
          className="register-signin-text mt-3 small text-muted "
          style={{ marginBottom: "1rem", gap: "5px", display: "flex" }}
        >
          Already have an account?
          <span className="">
            <button
              onClick={() => navigate("/Login")}
              className="signin-button"
              style={{
                color: "#F58634",
                border: "none",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </span>
        </span>

        <div
          className="register-inputs-container mt-4"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: "10px 40px 10px 10px",
              width: "400px",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.3",
              border: "none",
              outline: "none",
            }}
            className="register-input small"
            placeholder="Your name"
            type="text"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: "10px 40px 10px 10px",
              width: "400px",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.3",
              border: "none",
              outline: "none",
            }}
            className="register-input small"
            placeholder="Email Address"
            type="email"
          />
          <input
            name="number"
            value={formData.number}
            onChange={handleChange}
            style={{
              padding: "10px 40px 10px 10px",
              width: "400px",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.3",
              border: "none",
              outline: "none",
            }}
            className="register-input small"
            placeholder="Phone Number"
            type="tel"
          />
          <div
            className="password-input-wrapper"
            style={{ position: "relative", width: "100%" }}
          >
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="password-input"
              style={{
                width: "100%",
                padding: "10px 40px 10px 10px",
                border: "none",
                fontSize: "14px",
                boxShadow: "0px 1px 2px rgba(0,0,0,0.3",
                outline: "none",
              }}
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "18px",
                color: "#666",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {error && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
            {error}
          </p>
        )}

        <div
          className="terms-checkbox-wrapper mt-4 mb-3"
          style={{ display: "flex" }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              className="terms-checkbox"
              style={{ marginTop: "-15px", width: "20px" }}
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <p className="terms-text small text-muted">
              I agree with
              <span className="privacy-link" style={{ color: "#00A859" }}>
                {" "}
                Privacy Policy{" "}
              </span>
              and
              <span className="terms-link" style={{ color: "#00A859" }}>
                {" "}
                Terms of Use
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="register-submit-button"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: loading ? "#ccc" : "#00A859",
            color: "#fff",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Register;