import React from 'react'
import  P2  from '../assets/p2.png';
import  P3  from '../assets/p3.png';
import  P4  from '../assets/p4.png';
import  P5  from '../assets/p5.png';
import  P6  from '../assets/p6.png';


const Landing = () => {
  return (
    <>
      <div className="c1 container">
        <div className="  ">
          <div className='r1 '>
            <div
              style={{ marginTop: "120px" }}
              className=" landing col-sm-12 col-md-6 col-lg-6"
            >
              <p style={{ fontWeight: "170%" }} className="mt-5">
                Discover the Pure Taste of Nature
              </p>
              <h1
                style={{
                  width: "80%",
                  fontFamily: "MD Nichrome test",
                  fontSize: "430%",
                  fontWeight: "bolder",
                }}
              >
                Organic Snacks Made with Love, Just for You
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
            </div>
            <div  className=" landing2 col-sm-12 col-md-6 col-lg-6">
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
          <div className="page2 d-flex flex-column align-items-start">
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "350%",
                fontFamily: "MD Nichrome test",
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
                className=""
              >
                Browse All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing
