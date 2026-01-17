import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import P13 from "../assets/P13.png";
import P14 from "../assets/P14.png";

const Nproduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/fooddocuments/products/get-all-products",
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add to cart function (stores locally)
  const addToCart = (product) => {
    // Get existing cart from localStorage or create empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if product already in cart
    const existingItemIndex = existingCart.findIndex(
      item => item.product._id === product._id
    );

    if (existingItemIndex > -1) {
      // Product exists, increase quantity
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // New product, add to cart
      existingCart.push({
        product: {
          _id: product._id,
          name: product.name,
          price: product.price,
          productImg: product.productImg,
        },
        quantity: 1,
      });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Product added to cart!");
  };

  if (loading) {
    return <div className="text-center my-5">Loading products...</div>;
  }

  return (
    <>
      <div className="my-5">
        <div className="row">
          {products.slice(0, 3).map((product) => (
            <div key={product._id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex flex-column">
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  src={
                    product.productImg && product.productImg.length > 0
                      ? product.productImg[0]
                      : "/placeholder.jpg"
                  }
                  alt={product.name}
                />
                <div style={{ marginLeft: "-18px" }} className="card-body">
                  <p className="text-muted small d-flex justify-content-between align-items-center">
                    {product.category?.name || "No category"}
                    <img src={P13} alt="" />
                  </p>

                  <h6 style={{ fontWeight: "bold" }} className="">
                    {product.name}
                  </h6>
                  <div className="d-flex align-items-center justify-content-between small">
                    <FaStar style={{ color: "#F58634" }} size={12} />
                    <span
                      style={{ marginLeft: "-13rem" }}
                      className="text-muted small"
                    >
                      {product.rating || "0"}
                      <span className="ml-1">
                        ({product.reviewCount || "0"})
                      </span>
                    </span>
                    <div className="">
                      <h6 style={{ fontWeight: "bold" }} className="small">
                        ${product.price}
                      </h6>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(product)}
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
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          <img className="p14 col-sm-12 col-md-12 col-lg-12" src={P14} alt="" />
        </button>
      </div>
    </>
  );
};

export default Nproduct;
