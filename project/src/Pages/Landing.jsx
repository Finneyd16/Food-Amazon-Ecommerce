import React from "react";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p4.png";
import P5 from "../assets/p5.png";
import P6 from "../assets/p6.png";
import P15 from "../assets/P15.png";
import P16 from "../assets/P16.png";
import P17 from "../assets/P17.png";
import P22 from "../assets/P22.png";
import P23 from "../assets/P23.png";
import P13 from "../assets/P13.png";
import { FaStar } from "react-icons/fa";

import ProductGrid from "../Components/Products";
import OrdersGrid from "../Components/Bulkorder";
import HurryGrid from "../Components/Hurry";

const Landing = () => {
  return (
    <>
      <div className="c1 container">
        <div className="  ">
          <div className="r1 ">
            <div
              style={{ marginTop: "90px" }}
              className=" landing col-sm-12 col-md-6 col-lg-6"
            >
              <p style={{ fontWeight: "170%" }} className="mt-5">
                Discover the Pure Taste of Nature
              </p>
              <h1
                style={{
                  width: "80%",
                }}
              >
                <span style={{ color: "#00A859" }}>Organic</span>
                <span style={{ color: "#F58634" }}> Snacks</span>
                <span style={{ color: "#00A859" }}> Made</span>
                <span style={{ color: "#F58634" }}> with</span>
                <span style={{ color: "#00A859" }}> Love, Just</span>
                <span style={{ color: "#F58634" }}> for </span>
                <span style={{ color: "#00A859" }}> You</span>
              </h1>
              <button
                className="btn2"
                style={{
                  backgroundColor: "#F58634",
                  padding: "10px 20px",
                  borderRadius: "9px",
                  border: "none",
                  color: "#fff",
                }}
              >
                Shop Now <img className="p2" src={P2} alt="" />
              </button>
              <img className=" btn p17" src={P17} alt="" />
            </div>
            <div className=" landing2 col-sm-12 col-md-6 col-lg-6">
              <img className="p3" src={P3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="p4" src={P4} alt="" />
        <img className="p5" src={P5} alt="" />
        <img className="p6" src={P6} alt="" />
      </div>

      <div style={{ marginTop: "15rem" }} className="page2 container">
        <div className="row ">
          <div className=" d-flex flex-column align-items-start">
            <h1
              style={{
                fontWeight: "800",
                fontSize: "450%",
                fontFamily: "MD Nichrome test",
                color: "#0F0B0B",
              }}
              className="col-sm-12 col-md-6 col-lg-8 "
            >
              Our Popular Products
            </h1>
            <div className="page2p ">
              <p
                style={{ color: "#4D4D4D" }}
                className="col-sm-12 col-md-6 col-lg-5"
              >
                Browse our most popular snacks and make your day more beautiful
                and glorious.
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "4px",
                  color: "#00A859",
                  backgroundColor: "transparent",
                  borderColor: "#00A859 ",
                  border: "1px solid",
                }}
                className="btn3"
              >
                Browse All
              </button>
            </div>
          </div>
        </div>
        <ProductGrid />
      </div>

      <div className="page3 container py-5 ">
        <div className="row">
          <div
            style={{ paddingTop: "5rem" }}
            className="  d-flex flex-column align-items-center col-sm-12 col-md-6 col-lg-6"
          >
            <img className="p15" src={P15} alt="" />
            <button
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "999px",
                backgroundColor: "#00A859",
                color: "white",
              }}
            >
              100% Organic
            </button>
          </div>
          <div className=" page3s col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-items-start">
            <h1
              style={{
                fontWeight: "1000",

                textTransform: "uppercase",
                lineHeight: "1.1",
                fontFamily: "MD Nichrome Test",
              }}
            >
              <span style={{ color: "#07AA07" }}>High Quality</span>
              <br />
              <span style={{ color: "#F58634" }}>Organic Snacks</span>
            </h1>

            <p className="pmid" style={{ width: "103%", fontSize: "95%" }}>
              At Foodie Amazon, we believe in the power of nature to provide
              wholesome, delicious snacks. Our journey began with a simple
              mission: to bring the pure taste of nature to your doorstep. We
              are dedicated to creating snacks that are not only delicious but
              also healthy and free from artificial additives. Our major focus
              is on providing organic snacks that are made with the finest
              ingredients sourced from sustainable farms.
            </p>
            <p className="pmid" style={{ width: "106%", fontSize: "94%" }}>
              Our commitment to quality means that you won't find any gums,
              preservatives, or artificial sugars in our products. Instead, we
              use natural sweeteners and preservatives to ensure that every bite
              is as healthy as it is tasty.
            </p>
            <p
              style={{ fontStyle: "italic", width: "104%", fontSize: "80%" }}
              className="pmid my-3 d-flex  text-muted"
            >
              <img className="p16 mr-2" src={P16} alt="" />
              Our vision is to become a household name in organic snacks, known
              for our commitment to quality and sustainability.
            </p>
            <p className="signature" style={{ fontSize: "100%" }}>
              John Doe
            </p>
            <p
              className=" psmal text-muted"
              style={{ fontSize: "50%", marginTop: "-15px" }}
            >
              Chief Executive Officer
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#EFFFE5",  }}
        className="page4 pb-5 "
      >
        <div className="">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <h1
              style={{
                fontFamily: "MD Nichrome test",
                fontSize: "600%",
                fontWeight: "900",
              }}
            >
              Bulk Orders
            </h1>
            <div className="empty"></div>
            <p style={{ width: "55%", textAlign: "center" }}>
              Our snacks are free from artificial additives, providing a pure
              and wholesome snacking experience. Discover our range of
              delightful organic treats designed to satisfy your cravings while
              supporting a healthy lifestyle.
            </p>
          </div>
        </div>
        <div className=" container">
          <OrdersGrid />
        </div>
      </div>
      <div style={{ marginTop: "10rem" }} className="page5 container">
        <div className="row ">
          <div className=" d-flex flex-column align-items-start">
            <h1
              style={{
                fontWeight: "800",
                fontSize: "450%",
                fontFamily: "MD Nichrome test",
                color: "#0F0B0B",
              }}
              className="col-sm-12 col-md-6 col-lg-8 "
            >
              Our New Products
            </h1>
            <div className="page2p ">
              <p
                style={{ color: "#4D4D4D" }}
                className="col-sm-12 col-md-6 col-lg-5"
              >
                Browse our most popular snacks and make your day more beautiful
                and glorious.
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "4px",
                  color: "#00A859",
                  backgroundColor: "transparent",
                  borderColor: "#00A859 ",
                  border: "1px solid",
                }}
                className="btn3"
              >
                Browse All
              </button>
            </div>
          </div>
        </div>
        <ProductGrid />
      </div>
      <div className="container page6  py-5">
        <div className="page6p ">
          <h1
            style={{ fontWeight: "700" }}
            className="col-sm-12 col-md-6 col-lg-5"
          >
            Hurry Do not Miss Out On This Offers
          </h1>
          <button
            style={{
              padding: "10px 20px",
              color: "#fff",
              backgroundColor: "#00A859",
              border: "none",
            }}
            className="btn3"
          >
            Browse All
          </button>
        </div>
      </div>
      <div className=" container ">
        <div className="row">
          <img className="col-sm-12 col-md-8 col-lg-8" src={P22} alt="" />
          <div className=" page7 col-sm-12 col-md-4 col-lg-4">
            <img src={P23} className="card-img-top " alt="..." />
            <div>
              <p className="my-3 text-muted d-flex align-items-center justify-content-between small">
                Coconut Flakes{" "}
                <img style={{ width: "5%" }} className=" p9" src={P13} alt="" />
              </p>
              <h6>Coconut Crunchies</h6>
              <div className="d-flex align-items-center justify-content-between small">
                <FaStar style={{ color: "#F58634" }} size={12} />
                <span
                  style={{ marginLeft: "-14rem" }}
                  className="text-muted  small "
                >
                  5.0
                  <span className="ml-1">(102)</span>
                </span>
                <div className="">
                  <h6 style={{ fontWeight: "bold" }} className="small">
                    $399
                  </h6>
                </div>
              </div>
              <button
                style={{
                  border: "1px solid",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  backgroundColor: "transparent",
                  color: "#00A859",
                }}
                className="disabled btn4 w-100 mt-5 "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <HurryGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
