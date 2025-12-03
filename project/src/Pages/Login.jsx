import React from "react";
import P43 from "../assets/P43.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import P1 from "../assets/P1.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div
        className="login-page-container"
        style={{ display: "flex", gap: "5rem", alignItems: "center",position:'relative' }}
      >
        <img className="logo-image" style={{position:'absolute',top:'50px',left:'20rem'}} src={P1} alt="" />
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
              className="login-email-input small"
              placeholder="Email Address"
              type="text"
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
              />
              <p className="remember-me-text small text-muted">Remember me</p>
            </div>

            <p className="forgot-password-text small">Forgot Password?</p>
          </div>

          <button
            className="login-btn-submit"
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#00A859",
              color: "#fff",
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
