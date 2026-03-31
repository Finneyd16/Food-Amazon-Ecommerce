import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API_BASE_URL from '../Config';

function Verify() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying");
  const reference = searchParams.get("reference");

  useEffect(() => {
    verifyPayment();
  }, []);

  const verifyPayment = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/fooddocuments/orders/confirm`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reference }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        
        // Clear cart after successful payment
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          await fetch(
            `${API_BASE_URL}/api/fooddocuments/carts/clear-cart/${user._id}`,
            { method: "DELETE" }
          );
        }

        setTimeout(() => navigate("/"), 3000);
      } else {
        setStatus("failed");
      }
    } catch (error) {
      console.error("Verification error:", error);
      setStatus("failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="text-center">
        {status === "verifying" && (
          <>
            <div className="spinner-border text-primary mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h3>Verifying Payment...</h3>
          </>
        )}

        {status === "success" && (
          <>
            <div className="text-success mb-3" style={{ fontSize: "64px" }}>✓</div>
            <h3 className="text-success">Payment Successful!</h3>
            <p>Your order has been confirmed. Redirecting...</p>
          </>
        )}

        {status === "failed" && (
          <>
            <div className="text-danger mb-3" style={{ fontSize: "64px" }}>✗</div>
            <h3 className="text-danger">Payment Failed</h3>
            <p>There was an issue with your payment.</p>
            <button className="btn btn-primary" onClick={() => navigate("/cart")}>
              Back to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Verify;