import React, { useState, useEffect } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Carts() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState({ cartItems: [] });
  const [loading, setLoading] = useState(true);

  // Load cart from localStorage only
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart({ cartItems: localCart });
    setLoading(false);
  }, []);

  const updateQuantity = (productId, newQty) => {
    if (newQty < 1) return;

    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = localCart.map((item) =>
      item.product._id === productId ? { ...item, quantity: newQty } : item
    );
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart({ cartItems: updatedCart });
  };

  const removeItem = (productId) => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = localCart.filter(
      (item) => item.product._id !== productId
    );
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart({ cartItems: updatedCart });
  };

  const handleCheckout = () => {
    if (user) {
      navigate("/checkout");
    } else {
      localStorage.setItem("intendedDestination", "/checkout");
      navigate("/Login");
    }
  };

  const calcSubtotal = () => {
    if (!cart?.cartItems) return 0;
    return cart.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  };

  const subtotal = calcSubtotal();
  const savings = 32.0;
  const shipping = 0;
  const tax = subtotal * 0.01;
  const total = subtotal - savings + shipping + tax;

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading cart...</div>
      </div>
    );
  }

  const cartItems = cart?.cartItems || [];

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-8">
          <h3 className="text-2xl font-bold mb-6">
            Shopping Cart ({cartItems.length} items)
          </h3>
          <div className="md:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center text-gray-500">
                Your cart is empty
              </div>
            ) : (
              <ol className="">
                {cartItems.map((item, index) => (
                  <li
                    style={{ listStyle: "none" }}
                    key={item.product._id}
                    className="p-4  pb-6"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                      className=""
                    >
                      <p className="small">Item {index + 1}</p>
                      <button className="small">Save for later</button>

                      <button
                        onClick={() => removeItem(item.product._id)}
                        className="small"
                      >
                        Remove
                      </button>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "6px",
                        }}
                        className=""
                      >
                        <span className="">Qty:</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product._id, item.quantity - 1)
                          }
                          className=""
                          disabled={item.quantity <= 1}
                        >
                          <Minus style={{ width: "20px" }} size={14} />
                        </button>
                        <span className="">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product._id, item.quantity + 1)
                          }
                          className=""
                        >
                          <Plus style={{ width: "20px" }} size={14} />
                        </button>
                      </div>
                    </div>

                    <div
                      style={{ display: "flex", gap: "8px" }}
                      className="mt-4"
                    >
                      <img
                        style={{ height: "90px" }}
                        src={
                          item.product.productImg &&
                          item.product.productImg.length > 0
                            ? item.product.productImg[0]
                            : "/placeholder.jpg"
                        }
                        className="rounded"
                        alt={item.product.name}
                      />

                      <div>
                        <h3
                          style={{ marginBottom: "5px" }}
                          className="small font-semibold"
                        >
                          {item.product.name}
                        </h3>

                        <p className="small text-gray-500">
                          Cart ID: {item.product._id}
                        </p>

                        <p
                          style={{ marginTop: "-10px" }}
                          className="small font-medium"
                        >
                          ${item.product.price}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Original Price</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Savings</span>
              <span>-${savings.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600 font-semibold">FREE</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Sales Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-orange-600 disabled:bg-gray-300"
            disabled={cartItems.length === 0}
          >
            Proceed to Check Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carts;