import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import P27 from "../assets/P27.png";
import P28 from "../assets/P28.png";
import P29 from "../assets/P29.png";
import P30 from "../assets/P30.png";
import P31 from "../assets/P31.png";

const Footer = () => {
  return (
    <>
      <footer
        style={{ backgroundColor: "#1B2432" }}
        className="text-center   text-muted"
      >
        <section className=" container d-flex justify-content-center  text-white p-4 border-bottom">
          <div className="me-5  ">
            <h4>Excellent</h4>
            <img src={P27} alt="" />
            <p>Based on 13,586 reviews</p>
            <div>
              {" "}
              <img
                style={{
                  marginTop: "-60px",
                  marginLeft: "70px",
                  width: "100px",
                }}
                src={P30}
                alt=""
              />
            </div>

            <span
              style={{
                position: "absolute",
                marginTop: "-30px",
                marginLeft: "-50px",
              }}
            >
              <img src={P28} alt="" />
              <img
                style={{ position: "relative", left: "-15px", top: "4px" }}
                src={P29}
                alt=""
              />

              <img style={{ marginTop: "5px" }} src={P31} alt="" />
            </span>
          </div>
        </section>

        <section className=" ">
          <div className="container text-muted text-center text-md-start mt-5 ">
            <div className="row mt-3 ">
              <div className=" footer1 col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 d-flex flex-column align-items-start">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  <i className=" me-3 "></i>Customer Service
                </h6>
                <p className="">
                  <a href="#!" className="text-reset ">
                    Order Lookup
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Bulk Order
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Shipping & Delivery
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Discounts
                  </a>
                </p>
              </div>

              <div className="footer2 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column align-items-start">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  About Us
                </h6>
                <p className="">
                  <a href="#!" className="text-reset ">
                    News & Blog
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Suppliers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className=" footer3 col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column align-items-start">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  Need Help?
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQs
                  </a>
                </p>
              </div>

              <div className="footer4 col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 d-flex flex-column align-items-start">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  Privacy
                </h6>
                <p>
                  <i className=" me-3"></i> Terms & Conditions
                </p>
                <p>
                  <i className=" me-3"></i>
                  Privacy Policy
                </p>
              </div>
              <div>
                <h6 className="text-uppercase fw-bold mb-4 text-white d-flex flex-column align-items-start">
                  Follow us
                </h6>
                <a href="" className=" footer5 me-4 text-reset">
                  <i
                    style={{
                      backgroundColor: "#F58634",
                      color: "white",
                      padding: "10px 20px",
                      paddingRight: "25px",
                      paddingLeft: "15px",
                      marginRight: "15px",
                    }}
                    className="fab fa-facebook-f"
                  ></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i
                    style={{
                      backgroundColor: "#F58634",
                      color: "white",
                      padding: "10px 20px",
                      paddingRight: "30px",
                      paddingLeft: "15px",
                      marginRight: "15px",
                    }}
                    className="fab fa-twitter"
                  ></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i
                    style={{
                      backgroundColor: "#F58634",
                      color: "white",
                      padding: "10px 20px",
                      paddingRight: "30px",
                      paddingLeft: "15px",
                      marginRight: "15px",
                    }}
                    className="fab fa-linkedin"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-white text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold">MDBootstrap.com</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
