import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
 
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Nigeria",
    phone: "",
    firstName: "",
    lastName: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderNote, setOrderNote] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    firstName: "",
    lastName: "",
    rememberCard: false,
  });

  useEffect(() => {
    // Wait for auth to load before checking user
    if (authLoading) return;

    // Redirect if not logged in
    if (!user) {
      navigate("/Login");
      return;
    }

    fetchCheckoutData();
  }, [user, authLoading, navigate]);

  const fetchCheckoutData = async () => {
    try {
      // Fetch cart
      const cartResponse = await fetch(
        `http://localhost:3001/api/fooddocuments/carts/get-cart/${user._id}`,
      );
      const cartData = await cartResponse.json();
      setCart(cartData);

      // Fetch customer info
      const customerResponse = await fetch(
        `http://localhost:3001/api/fooddocuments/customers/${user._id}`,
      );

      if (customerResponse.ok) {
        const customerData = await customerResponse.json();
        

        // Pre-fill shipping info if customer has it
        setShippingInfo({
          address: customerData.address || "",
          city: customerData.city || "",
          state: customerData.state || "",
          zipCode: customerData.zipCode || "",
          country: customerData.country || "Nigeria",
          phone: customerData.phone || "",
          firstName: customerData.firstName || user?.name?.split(" ")[0] || "",
          lastName: customerData.lastName || user?.name?.split(" ")[1] || "",
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

  const handleCardInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const calcSubtotal = () => {
    if (!cart?.cartItems) return 0;
    return cart.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
  };

  const handlePlaceOrder = async () => {
    try {
      // Validate shipping info
      if (
        !shippingInfo.address ||
        !shippingInfo.city ||
        !shippingInfo.state ||
        !shippingInfo.zipCode ||
        !shippingInfo.country ||
        !shippingInfo.phone ||
        !shippingInfo.firstName ||
        !shippingInfo.lastName
      ) {
        alert("Please fill in all billing details");
        return;
      }

      // Validate card details if card payment is selected
      if (paymentMethod === "card") {
        if (
          !cardDetails.cardNumber ||
          !cardDetails.expirationDate ||
          !cardDetails.securityCode ||
          !cardDetails.firstName ||
          !cardDetails.lastName
        ) {
          alert("Please fill in all card details");
          return;
        }
      }

      if (!cart?.cartItems || cart.cartItems.length === 0) {
        alert("Your cart is empty");
        return;
      }

      // Create order
      const orderData = {
        customerId: user._id,
        items: cart.cartItems.map((item) => ({
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
        },
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
        },
      );

      alert("Order placed successfully!");
      navigate("/order-confirmation", { state: { order } });
    } catch (error) {
      console.error("Place order error:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  // Show loading while auth is being checked
  if (authLoading || loading) {
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
      <div className="row g-4">
        {/* Left Column - Billing Details */}
        <div className="col-lg-7">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="h5 fw-bold mb-4">Billing Details</h3>

            <div className="mb-3">
              <label className="form-label small text-muted">
                Your email address
              </label>
              <input
                type="email"
                className="form-control"
                value={user?.email || ""}
                disabled
                style={{ backgroundColor: "#f8f9fa" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label small">Deliver to</label>
                <input
                  type="text"
                  name="Residence"
                  className="form-control"
                  value={shippingInfo.Residence || ""}
                  onChange={handleInputChange}
                  placeholder="Residence"
                />
              
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">Country</label>
              <select style={{width:"100%",height:"40px"}}
                name="country"
                className="form-select"
                value={shippingInfo.country}
                onChange={handleInputChange}
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
              </select>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <label className="form-label small">Your first name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={shippingInfo.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                />
              </div>
              <div className="col-6">
                <label className="form-label small">Your last name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={shippingInfo.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label small">Your address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={shippingInfo.address}
                onChange={handleInputChange}
                placeholder="Street address"
              />
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <label className="form-label small">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                  placeholder="City"
                />
              </div>
              <div className="col-4">
                <label className="form-label small">State</label>
                <select style={{width:"100%",height:'39px'}}
                  name="state"
                  className="form-select"
                  value={shippingInfo.state}
                  onChange={handleInputChange}
                >
                  <option value="">Select State</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Delta">Delta</option>
                  <option value="Abuja">Abuja</option>
                </select>
              </div>
              <div className="col-4">
                <label className="form-label small">Zip code</label>
                <input
                  type="text"
                  name="zipCode"
                  className="form-control"
                  value={shippingInfo.zipCode}
                  onChange={handleInputChange}
                  placeholder="Zip code"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label small">Your phone number</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={shippingInfo.phone}
                onChange={handleInputChange}
                placeholder="Phone number"
              />
            </div>

            <div className="mb-0">
              <label className="form-label small">Order Note (optional)</label>
              <textarea
                className="form-control"
                rows="3"
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                placeholder="Tell us what do you think"
                style={{ resize: "none" }}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary & Payment */}
        <div className="col-lg-5">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="h5 fw-bold mb-4">Your Order</h3>

            {/* Price Breakdown */}
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="small text-muted">Original Price</span>
                <span className="small">${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="small text-muted">Savings</span>
                <span className="small">${savings.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="small text-muted">Shipping</span>
                <span className="small text-success fw-semibold">FREE</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="small text-muted">Estimated Sales Tax</span>
                <span className="small">${tax.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold fs-5">${total.toFixed(2)}</span>
              </div>
            </div>

            <hr />

            {/* Payment Method */}
            <h4 className="h6 fw-bold mb-3">Pay With</h4>

            {/* Card Payment Option */}
            <div className="mb-3">
              <div className="form-check d-flex align-items-center mb-2">
                <input
                  className="form-check-input me-2"
                  type="radio"
                  name="paymentMethod"
                  id="card"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label
                  className="form-check-label d-flex align-items-center justify-content-between flex-grow-1"
                  htmlFor="card"
                >
                  <span className="me-auto">Card</span>
                  <div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                      alt="Visa"
                      style={{ height: "20px", marginRight: "5px" }}
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                      alt="Mastercard"
                      style={{ height: "20px" }}
                    />
                  </div>
                </label>
              </div>

              {/* Card Details Form - Show when card is selected */}
              {paymentMethod === "card" && (
                <div className="ms-4 p-3 border rounded bg-light">
                  <div className="mb-3">
                    <label className="form-label small">Card number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      className="form-control"
                      value={cardDetails.cardNumber}
                      onChange={handleCardInputChange}
                      placeholder="0000 0000 0000 0000"
                      maxLength="19"
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <label className="form-label small">
                        Expiration date
                      </label>
                      <input
                        type="text"
                        name="expirationDate"
                        className="form-control"
                        value={cardDetails.expirationDate}
                        onChange={handleCardInputChange}
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label small">Security code</label>
                      <input
                        type="text"
                        name="securityCode"
                        className="form-control"
                        value={cardDetails.securityCode}
                        onChange={handleCardInputChange}
                        placeholder="CVV"
                        maxLength="4"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <label className="form-label small">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={cardDetails.firstName}
                        onChange={handleCardInputChange}
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label small">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={cardDetails.lastName}
                        onChange={handleCardInputChange}
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="rememberCard"
                      id="rememberCard"
                      checked={cardDetails.rememberCard}
                      onChange={handleCardInputChange}
                    />
                    <label
                      className="form-check-labe small"
                      htmlFor="rememberCard"
                    >
                      Remember this card for future order
                    </label>
                  </div>

                  <div className="d-flex align-items-center " style={{ gap: "10px" }}>
                    <button
                      className="btn btn-success flex-grow-1"
                      onClick={() => {
                        /* Handle card submission */
                      }}
                    >
                      Done
                    </button>
                    <button
                      className="btn btn-outline-secondary flex-grow-1"
                      onClick={() => setPaymentMethod("")}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* PayPal Payment Option */}
            <div className="form-check d-flex align-items-center mb-3">
              <input
                className="form-check-input me-2"
                type="radio"
                name="paymentMethod"
                id="paypal"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                className="form-check-label d-flex align-items-center justify-content-between flex-grow-1"
                htmlFor="paypal"
              >
                <span className="me-auto">Paypal</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  style={{ height: "20px" }}
                />
              </label>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="btn btn-warning w-100 py-3 fw-semibold"
              style={{
                backgroundColor: "#ff8c42",
                border: "none",
                color: "white",
              }}
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
