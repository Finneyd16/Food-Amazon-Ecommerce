import React from "react";
import P35 from "../assets/P35.png";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

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
      </>
    );
  }
};

export default Ordernow;
