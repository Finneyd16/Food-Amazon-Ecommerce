import React from "react";
import P1 from "../assets/P1.png";
import P7 from "../assets/P7.png";
import P8 from "../assets/P8.png";
import P9 from "../assets/P9.png";


const Header = () => {
  return (
    <>
      <nav className=" container navbar navbar-expand-lg bg-body-tertiary ">
        <div className=" row container-fluid ">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img style={{ marginRight: "3rem" }} src={P1} alt="" />
          </a>

          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-4">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Home
                </a>
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
              <li style={{ marginRight: "2rem" }} className="nav-item">
                <a className="nav-link text-dark" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link btn text-dark" href="#">
                  <img style={{ marginRight: "2rem" }} src={P8} alt="" />
                </button>
              </li>
            </ul>
          </div>

          <div className="nav-last d-flex align-items-center">
            <button className="text-dark btn me-3" href="#">
              <img src={P9} alt="" />
            </button>
            <button className="text-dark btn me-3" href="#">
              <img style={{ marginRight: "2rem" }} src={P7} alt="" />
            </button>

            <button
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "9PX",
                backgroundColor: "#00A859",
              }}
              className="btn1"
            >
              <a>Contact Us</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
