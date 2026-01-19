import React, { useState, useEffect } from "react";
import P43 from "../assets/P43.png";
import P1 from "../assets/P1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Redirect if already logged in
  // useEffect(() => {
  //   if (user) {
  //     const intendedDestination = localStorage.getItem("intendedDestination");
      
  //     if (intendedDestination) {
  //       // User came from checkout, go there
  //       navigate(intendedDestination);
  //       localStorage.removeItem("intendedDestination");
  //     } else {
  //       // User manually visited login while logged in, go back
  //       navigate(-1);
  //     }
  //   }
  // }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      await login(formData.email, formData.password);

      // Optional: Store email if remember me is checked
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", formData.email);
      }

      // Success! Navigate based on intended destination
      alert("Login successful!");
      const intendedDestination = localStorage.getItem("intendedDestination") || "/";
      navigate(intendedDestination);
      localStorage.removeItem("intendedDestination");
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-page-container"
      style={{
        display: "flex",
        gap: "5rem",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        className="logo-image"
        style={{ position: "absolute", top: "50px", left: "20rem" }}
        src={P1}
        alt=""
      />
      <img
        className="login-left-image"
        style={{ height: "100vh", width: "50%" }}
        src={P43}
        alt=""
      />

      <div
        className="login-right-wrapper d-flex flex-column"
        style={{ padding: "2rem" }}
      >
        <h2
          className="login-heading"
          style={{
            fontFamily: "MD Nichrome Test",
            color: "#00A859",
            fontWeight: "bold",
          }}
        >
          Login
        </h2>

        <span
          className="login-subtitle mt-3 small text-muted"
          style={{ marginBottom: "1rem", gap: "5px", display: "flex" }}
        >
          Don't have an account yet?
          <span className="signup-wrapper">
            <button
              onClick={() => navigate("/Register")}
              className="signup-btn"
              style={{
                color: "#F58634",
                border: "none",
                backgroundColor: "white",
              }}
            >
              Sign Up
            </button>
          </span>
        </span>

        <div
          className="login-input-group"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="login-email-input small"
            placeholder="Email Address"
            type="email"
            style={{
              padding: "10px 40px 10px 10px",
              width: "400px",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.3",
              border: "none",
              outline: "none",
            }}
          />

          <div
            className="login-password-container"
            style={{ position: "relative", width: "100%" }}
          >
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="login-password-input"
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
              className="password-toggle-icon"
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
          className="login-remember-forgot mt-4 mb-3"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            className="remember-me-container"
            style={{ display: "flex", gap: "10px" }}
          >
            <input
              className="remember-me-checkbox"
              style={{ marginTop: "-15px", width: "20px" }}
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <p className="remember-me-text small text-muted">Remember me</p>
          </div>

          <p className="forgot-password-text small">Forgot Password?</p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="login-btn-submit"
          type="button"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: loading ? "#ccc" : "#00A859",
            color: "#fff",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Login;