import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState(null);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderNote, setOrderNote] = useState("");

  useEffect(() => {
    // Redirect if not logged in
    if (!user) {
      navigate("/Login");
      return;
    }

    fetchCheckoutData();
  }, [user, navigate]);

  const fetchCheckoutData = async () => {
    try {
      // Fetch cart
      const cartResponse = await fetch(
        `http://localhost:3001/api/fooddocuments/carts/get-cart/${user._id}`
      );
      const cartData = await cartResponse.json();
      setCart(cartData);

      // Fetch customer info
      const customerResponse = await fetch(
        `http://localhost:3001/api/fooddocuments/customers/${user._id}`
      );
      
      if (customerResponse.ok) {
        const customerData = await customerResponse.json();
        setCustomer(customerData);
        
        // Pre-fill shipping info if customer has it
        setShippingInfo({
          address: customerData.address || "",
          city: customerData.city || "",
          state: customerData.state || "",
          zipCode: customerData.zipCode || "",
          country: customerData.country || "",
          phone: customerData.phone || "",
        });
      }

      setLoading(false);
    } catch (error) {
      console.error("Checkout data fetch error:", error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const calcSubtotal = () => {
    if (!cart?.cartItems) return 0;
    return cart.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  };

  const handlePlaceOrder = async () => {
    try {
      // Validate shipping info
      if (!shippingInfo.address || !shippingInfo.city || !shippingInfo.state || 
          !shippingInfo.zipCode || !shippingInfo.country || !shippingInfo.phone) {
        alert("Please fill in all shipping information");
        return;
      }

      if (!cart?.cartItems || cart.cartItems.length === 0) {
        alert("Your cart is empty");
        return;
      }

      // Create order
      const orderData = {
        customerId: user._id,
        items: cart.cartItems.map(item => ({
          productId: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
        })),
        shippingAddress: shippingInfo,
        paymentMethod: paymentMethod,
        orderNote: orderNote,
        totalAmount: total,
      };

      const response = await fetch(
        "http://localhost:3001/api/fooddocuments/orders/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const order = await response.json();

      // Clear cart after successful order
      await fetch(
        `http://localhost:3001/api/fooddocuments/carts/clear-cart/${user._id}`,
        {
          method: "DELETE",
        }
      );

      alert("Order placed successfully!");
      navigate("/order-confirmation", { state: { order } });
    } catch (error) {
      console.error("Place order error:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading checkout...</div>
      </div>
    );
  }

  const subtotal = calcSubtotal();
  const savings = 32.0;
  const shipping = 0;
  const tax = subtotal * 0.01;
  const total = subtotal - savings + shipping + tax;
  const cartItems = cart?.cartItems || [];

  return (
    <div className="container my-5">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      <div className="row">
        {/* Shipping Information */}
        <div className="col-md-7">
          <div className="bg-white p-4 rounded shadow-sm mb-4">
            <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
            
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={user?.name || ""}
                disabled
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={user?.email || ""}
                disabled
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={shippingInfo.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address *</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={shippingInfo.address}
                onChange={handleInputChange}
                placeholder="Street address"
                required
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">City *</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">State *</label>
                <input
                  type="text"
                  name="state"
                  className="form-control"
                  value={shippingInfo.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  className="form-control"
                  value={shippingInfo.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Country *</label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  value={shippingInfo.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Order Notes (Optional)</label>
              <textarea
                className="form-control"
                rows="3"
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                placeholder="Special instructions for your order..."
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-4 rounded shadow-sm mb-4">
            <h3 className="text-xl font-bold mb-4">Payment Method</h3>
            
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="card"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="card">
                Credit/Debit Card
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="paypal"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="cash"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="cash">
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-5">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            {/* Cart Items */}
            <div className="mb-4">
              {cartItems.map((item) => (
                <div key={item.product._id} className="d-flex mb-3 pb-3 border-bottom">
                  <img
                    src={
                      item.product.productImg && item.product.productImg.length > 0
                        ? item.product.productImg[0]
                        : "/placeholder.jpg"
                    }
                    alt={item.product.name}
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    className="rounded me-3"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.product.name}</h6>
                    <small className="text-muted">Qty: {item.quantity}</small>
                  </div>
                  <div className="text-end">
                    <strong>${(item.product.price * item.quantity).toFixed(2)}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Breakdown */}
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2 text-success">
                <span>Savings:</span>
                <span>-${savings.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span className="text-success fw-bold">FREE</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between pt-3 border-top">
                <strong>Total:</strong>
                <strong className="text-primary">${total.toFixed(2)}</strong>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="btn btn-success w-100 py-3"
              disabled={cartItems.length === 0}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;