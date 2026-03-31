import React from "react";
import { FaStar } from "react-icons/fa";
import P10 from "../assets/P10.png";
import P11 from "../assets/P11.png";
import P12 from "../assets/P12.png";
import P13 from "../assets/P13.png";



const Products = [
  
  {
    id: "1",
    title: "Organic Almond Delight",
    category: "Coconut Flakes",
    ratings: "5.0",
    reviews: "18",
    Price: "$110",
    image: P10,
  },
  {
    id: "2",
    title: "Berry Bliss Bites",
    category: "Coconut Flakes",
    ratings: "5.0",
    reviews: "28",
    Price: "$139",
    image: P11,
  },
  {
    id: "3",
    title: "Coconut Crunchies",
    category: "Coconut Flakes",
    ratings: "5.0",
    reviews: "102",
    Price: "$399",
    image: P12,
  },
];

const HurryGrid = () => {
    
  return (
    <>
      <div className=" my-5">
        <div className="row ">
          {Products.map((Product) => (
            <div key={Product.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className=" d-flex flex-column">
                <img className={`${Product.category === "Coconut Flakes" ? "hurryimg" : "" }`} src={Product.image} alt="" />
                <div style={{ marginLeft: "-18px" }} className="card-body">
                  <p className="text-muted small d-flex justify-content-between align-items-center">
                    {Product.category}
                    <img src={P13} alt="" />
                  </p>

                  <h6 style={{ fontWeight: "bold" }} className="">
                    {Product.title}
                  </h6>
                  <div className="d-flex align-items-center justify-content-between small">
                    <FaStar style={{ color: "#F58634" }} size={12} />
                    <span
                      style={{ marginLeft: "-13rem" }}
                      className="text-muted  small "
                    >
                      {Product.ratings}
                      <span className="ml-1">({Product.reviews})</span>
                    </span>
                    <div className="">
                      <h6 style={{ fontWeight: "bold" }} className="small">
                        {Product.Price}
                      </h6>
                    </div>
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
                  className="btn4 w-100 mt- mb-5"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default HurryGrid;