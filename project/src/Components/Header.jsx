import React from "react";
import P1 from "../assets/P1.png";
import P7 from "../assets/P7.png";
import P8 from "../assets/P8.png";
import P9 from "../assets/P9.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light ">
      <div className=" container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars fa-lg"></i>
        </button>

        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            className="p1"
            style={{ marginRight: "3rem" }}
            src={P1}
            alt="Logo"
          />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-4">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Our Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Health Benefits
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item" style={{ marginRight: "2rem" }}>
              <a className="nav-link text-dark" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <button className="p8 nav-link btn text-dark border-left border-right">
                <img  src={P8} alt="" />
              </button>
            </li>
            <li>
              <button className="p9 text-dark btn me-3">
                <img style={{marginLeft:'20px'}} src={P9} alt="" />
              </button>
            </li>
            <li>
              <button className=" p7 text-dark btn me-3 ">
                <img
                  style={{ marginRight: "2rem", marginTop: "-9px" }}
                  src={P7}
                  alt=""
                />
              </button>
            </li>
            <li>
              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "9px",
                  backgroundColor: "#00A859",
                  color: "white",
                }}
                className="btn1"
              >
                <a>Contact Us</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
