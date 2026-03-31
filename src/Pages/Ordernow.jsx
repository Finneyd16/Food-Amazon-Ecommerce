import React from "react";
import P35 from "../assets/P35.png";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import P36 from "../assets/P36.png";
import P37 from "../assets/P37.png";
import P38 from "../assets/P38.png";
import P39 from "../assets/P39.png";
import P40 from "../assets/P40.png";
import P41 from "../assets/P41.png";
import P42 from "../assets/P42.png";
import ProductGrid from "../Components/Products";


const Ordernow = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);

  if (id === "3") {
    return (
      <>
        <div className="container">
          <div style={{ marginTop: "100px" }} className="row">
            <div className="col-sm-12 col-md-6 col-lg-7">
              <img
                style={{ height: "588px" }}
                className="p35"
                src={P35}
                alt=""
              />
            </div>
            <div className="mb-3 col-sm-12 col-md-6 col-lg-5">
              <p className="text-muted">Coconut Flakes</p>
              <h3>Coconut Crunchies</h3>
              <p>
                <span
                  className="text-muted"
                  style={{
                    textDecoration: "line-through",
                    marginRight: "10px",
                  }}
                >
                  $120
                </span>
                <span
                  style={{
                    fontSize: "150%",
                    fontWeight: "600",
                    color: "#F86624",
                  }}
                >
                  $60
                </span>
              </p>
              <p
                className="text-muted"
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                
                <FaStar style={{ color: "#F58634" }} />
                <span>5.0</span>
                <span>(37)</span>
              </p>
              <div className="mt-4" style={{ display: "flex", gap: "35px" }}>
                <strong>Variety:</strong>
                <ul style={{ lineHeight: "180%" }} className="text-muted">
                  <li>Classic Nut Mix </li>
                  <li>Spicy Nut Mix</li>
                  <li>Sweet & Salty Nut Mix</li>
                </ul>
              </div>
              <div style={{ gap: "12px" }} className="d-flex">
                <strong>Quantity:</strong>
                <div
                  style={{ gap: "12px" }}
                  className="d-flex align-items-center "
                >
                  <button
                    style={{
                      width: "25px",
                      backgroundColor: "#C4D1D0",
                      border: "none",
                    }}
                    onClick={decreaseQty}
                  >
                    -
                  </button>
                  <input
                    style={{
                      width: "25px",
                      textAlign: "center",
                      border: "1px solid #ccc",
                      borderRadius: "px",
                    }}
                    type="text"
                    value={quantity}
                    readOnly
                  />
                  <button
                    style={{
                      width: "25px",
                      backgroundColor: "#C4D1D0",
                      border: "none",
                    }}
                    onClick={increaseQty}
                  >
                    +
                  </button>
                </div>
              </div>
              <p
                style={{ lineHeight: "180%", width: "89%" }}
                className="py-4 text-muted"
              >
                Our Date-Coconut Delight combines the rich sweetness of organic
                date syrup with the tropical flavor of coconut flakes, creating
                a snack that’s both indulgent and healthy.
              </p>
              <div
                style={{ gap: "10px", alignItems: "center" }}
                className="d-flex flex-column"
              >
                <button
                  style={{
                    padding: "10px",
                    width: "100%",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#00A859",
                    color: "#fff",
                  }}
                >
                  Add to Cart
                </button>
                <button
                  style={{
                    padding: "10px",
                    width: "100%",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#F58634",
                    color: "#fff",
                  }}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h5 style={{ fontWeight: "800" }}>About This Product</h5>
              <p
                className="text-muted"
                style={{ width: "89%", lineHeight: "180%", fontSize: "95%" }}
              >
                Indulge in the natural crunch and flavor of our Crunchy Nut Mix,
                a blend of premium nuts roasted to perfection. This mix includes
                almonds, cashews, and walnuts, providing a delicious and
                nutritious snack that is rich in protein and healthy fats.
              </p>
              <ul
                style={{ lineHeight: "180%", fontSize: "95%" }}
                className=" text-muted mt-4 ml-4"
              >
                <li>Blend of organic almonds, cashews, and walnuts</li>
                <li>Lightly roasted to enhance natural flavors</li>
                <li>No added oils or preservatives</li>
              </ul>
              <div>
                <p style={{ width: "90%", lineHeight: "180%" }}>
                  <strong>Benefits:</strong>
                  <span className="text-muted ml-2">
                    Excellent source of protein and healthy fats. Supports heart
                    health and brain function. Satisfies hunger and boosts
                    energy
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="pt-3 col-sm-12 col-md-8 col-lg-8">
              <strong>Customer Reviews</strong>
              <p
                className="pt-3 small"
                style={{ fontWeight: "bold", fontSize: "12px" }}
              >
                77 Reviews
              </p>
              <div className=" small">
                <FaStar style={{ color: "#F58634" }} />
                <FaStar style={{ color: "#F58634" }} />
                <FaStar style={{ color: "#F58634" }} />
                <FaStar style={{ color: "#F58634" }} />
                <FaStar style={{ color: "#F58634" }} />
              </div>
              <img
                style={{ height: "150px" }}
                className="pt-1"
                src={P36}
                alt=""
              />
            </div>
            <div className="pt-3 col-sm-12 col-md-4 col-lg-4">
              <strong>How would you rate this?</strong>
              <div className="small">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p
                className="pt-3 small"
                style={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Add a headline
              </p>
              <input
                className="bulkholder1"
                style={{
                  width: "100%",
                  height: "50px",
                  borderColor: "#c4d1d073",
                  border: "1px solid ",
                  marginTop: "-5px",
                  outline: "none",
                  borderRadius: "5px",
                }}
                type="text"
                placeholder="Write a summary of your review"
              />
              <p
                className="mt-4 small"
                style={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Write a review
              </p>
              <input
                className="bulkholder2"
                style={{
                  width: "100%",
                  height: "110px",
                  borderColor: "#c4d1d0a8",
                  border: "1px solid",
                  display: "flex",
                  alignItems: "baseline",
                  marginTop: "-5px",
                  outline: "none",
                  borderRadius: "5px",
                }}
                type="text"
                placeholder="Tell us what do you think"
              />
              <button
                className="mt-4 "
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px",
                  backgroundColor: "#00A859",
                  color: "white",
                  border: "none",
                  fontSize: "13px",
                }}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="container mt-5 mb-5 pb-5 "
        >
          <div className="row">
            <div style={{ gap: "15px" }} className="d-flex px-5">
              <div
                style={{
                  border: "none",
                  backgroundColor: " rgba(255, 255, 255, 0.01)",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  borderRadius: "9px",
                }}
                className=" bulkcard col-sm-12 col-md-4 col-lg-4 card "
              >
                <div className="card-body">
                  <img src={P37} alt="" />
                  <p className="mt-2">Sarah Taylor</p>
                  <div style={{ marginTop: "-20px" }} className=" small">
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                  </div>
                  <h6 className="mt-3 font-weight-bold">Organic Fruit Bites</h6>
                  <p style={{ width: "95%" }} className="small">
                    They're the perfect snack for my kids and I feel great
                    knowing they're eating something healthy and natural.
                  </p>
                </div>
              </div>
              <div
                style={{ borderRadius: "9px" }}
                className="col-sm-12 col-md-4 col-lg-4 card "
              >
                <div className="card-body">
                  <img src={P38} alt="" />
                  <p className="mt-2">Meg Lanningr</p>
                  <div style={{ marginTop: "-20px" }} className=" small">
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                  </div>
                  <h6 className="mt-3 font-weight-bold">Organic Fruit Bites</h6>
                  <p style={{ width: "95%" }} className="small">
                    They're deliciously chewy and full of flavor. It's like
                    eating a fresh mango without the mess.
                  </p>
                </div>
              </div>
              <div
                style={{ borderRadius: "9px" }}
                className="col-sm-12 col-md-4 col-lg-4 card "
              >
                <div className="card-body">
                  <img src={P39} alt="" />
                  <p className="mt-2">Alyssa Healy</p>
                  <div style={{ marginTop: "-20px" }} className=" small">
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                  </div>
                  <h6 className="mt-3 font-weight-bold">Crunchy Nut Mix</h6>
                  <p style={{ width: "100%" }} className="small">
                    I'm addicted to the Spicy Nut Mix! The blend of almonds,
                    cashews, and walnuts with a hint of spice is just perfect.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 row">
            <div style={{ gap: "15px" }} className="d-flex px-5">
              <div
                style={{ borderRadius: "9px" }}
                className=" bulkcard col-sm-12 col-md-4 col-lg-4 card "
              >
                <div className="card-body">
                  <img src={P40} alt="" />
                  <p className="mt-2">Ellyse Perry</p>
                  <div style={{ marginTop: "-20px" }} className=" small">
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                  </div>
                  <h6 className="mt-3 font-weight-bold">Crunchy Nut Mix</h6>
                  <p style={{ width: "95%" }} className="small">
                    The Sweet & Salty Nut Mix is the best I've ever had. The
                    nuts are roasted to perfection, and the balance of sweet.
                  </p>
                </div>
              </div>
              <div
                style={{ borderRadius: "9px" }}
                className="col-sm-12 col-md-4 col-lg-4 card "
              >
                <div className="card-body">
                  <img src={P41} alt="" />
                  <p className="mt-2">Beth Mooney</p>
                  <div style={{ marginTop: "-20px" }} className=" small">
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                  </div>
                  <h6 className="mt-3 font-weight-bold">Seed Power Bars</h6>
                  <p style={{ width: "95%" }} className="small">
                    The Original Seed Power Bar is a lifesaver for my busy
                    mornings. It's packed with protein and fiber.
                  </p>
                </div>
              </div>
              <div
                style={{ borderRadius: "9px" }}
                className="col-sm-12 col-md-4 col-lg-4 card "
              >
                <div className="card-body">
                  <img src={P42} alt="" />
                  <p className="mt-2">Megan Schutt</p>
                  <div style={{ marginTop: "-20px" }} className=" small">
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                    <FaStar style={{ color: "#F58634" }} />
                  </div>
                  <h6 className="mt-3 font-weight-bold">Seed Power Bars</h6>
                  <p style={{ width: "100%" }} className="small">
                    I tried the Chocolate Chip Seed Power Bar, and it exceeded
                    my expectations. The combination is superb.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="mt-5 "
            style={{
              backgroundColor: "#00A859",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
            }}
          >
            Load More
          </button>
        </div>
        <div style={{ marginTop: "8rem" }} className="page2 container">
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
                Similar Products
              </h1>
              <div className="page2p ">
                <p className=" text-muted col-sm-12 col-md-6 col-lg-5">
                  Browse our most popular snacks and make your day more
                  beautiful and glorious.
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
      </>
    );
  }
};

export default Ordernow;
