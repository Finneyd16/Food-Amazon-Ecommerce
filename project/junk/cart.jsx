// src/pages/CartPage.jsx
import React, { useState, useEffect } from "react";

// ⚠️ CHANGE THIS to your backend URL
const API_BASE = "http://localhost:5000";

// ⚠️ CHANGE THIS to a real customer ID from your database
const CUSTOMER_ID = "paste-a-real-customer-id-here";

function CartPage() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch cart when page loads
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await fetch(`${API_BASE}/cart/${CUSTOMER_ID}`);
      const data = await response.json();
      console.log("Cart data:", data); // Check what you get
      setCart(data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  const cartItems = cart?.cartItems || [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart ({cartItems.length} items)</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.product._id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{item.product.name}</h3>
              <p>Price: ${item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
