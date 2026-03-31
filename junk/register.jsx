import React from "react";
import P43 from "../assets/P43.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
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
                className="signin-button"
                style={{
                  color: "#F58634",
                  border: "none",
                  backgroundColor: "white",
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
              style={{
                padding: "10px 40px 10px 10px",
                width: "400px",
                boxShadow: "0px 1px 2px rgba(0,0,0,0.3",
                border: "none",
                outline: "none",
              }}
              className="register-input small"
              placeholder="Email Address"
              type="text"
            />
            <input
              style={{
                padding: "10px 40px 10px 10px",
                width: "400px",
                boxShadow: "0px 1px 2px rgba(0,0,0,0.3",
                border: "none",
                outline: "none",
              }}
              className="register-input small"
              placeholder="Phone Number"
              type="text"
            />
            <div
              className="password-input-wrapper"
              style={{ position: "relative", width: "100%" }}
            >
              <input
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
          <div
            className="terms-checkbox-wrapper mt-4 mb-3"
            style={{ display: "flex" }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                className="terms-checkbox"
                style={{ marginTop: "-15px", width: "20px" }}
                type="checkbox"
              />
              <p className="terms-text small text-muted">
                I agree with
                <span className="privacy-link" style={{ color: "#00A859" }}>
                  Privacy Policy
                </span>
                and
                <span className="terms-link" style={{ color: "#00A859" }}>
                  Terms of Use
                </span>
              </p>
            </div>
          </div>
          <button
            className="register-submit-button"
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#00A859",
              color: "#fff",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
