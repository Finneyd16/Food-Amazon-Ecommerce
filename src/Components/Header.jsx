import React, { useState } from "react";
import P1 from "../assets/P1.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX, FiSearch, FiHeart } from "react-icons/fi";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  const handleProducts = () => {
    navigate("/OurProducts");
    setMenuOpen(false);
  };

  const handleCarts = () => {
    navigate("/Carts");
    setMenuOpen(false);
  };

  return (
    <nav style={{
      backgroundColor: "white",
      padding: "12px 20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {/* Logo */}
        <img src={P1} alt="Logo" style={{ height: "50px" }} />

        {/* Mobile right side icons + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="mobile-icons">
          <button style={{ background: "none", border: "none", cursor: "pointer" }}>
            <FiSearch size={22} color="#000" strokeWidth={2} />
          </button>
          <button style={{ background: "none", border: "none", cursor: "pointer" }}>
            <FiHeart size={22} color="#000" strokeWidth={2} />
          </button>
          <button onClick={handleCarts} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <FiShoppingCart size={22} color="#000" strokeWidth={2} />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Desktop nav */}
        <ul className="desktop-nav" style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}>
          <li><Link to="/" style={{ textDecoration: "none", color: "#333", fontSize: "14px" }}>Home</Link></li>
          <li>
            <button onClick={handleProducts} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "14px", color: "#333" }}>
              Our Products
            </button>
          </li>
          <li><a href="#" style={{ textDecoration: "none", color: "#333", fontSize: "14px" }}>Health Benefits</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "#333", fontSize: "14px" }}>Blog</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "#333", fontSize: "14px" }}>FAQs</a></li>
          <li>
            <button style={{ background: "none", border: "none", cursor: "pointer" }}>
              <FiSearch size={22} color="#000" strokeWidth={2} />
            </button>
          </li>
          <li>
            <button style={{ background: "none", border: "none", cursor: "pointer" }}>
              <FiHeart size={22} color="#000" strokeWidth={2} />
            </button>
          </li>
          <li>
            <button onClick={handleCarts} style={{ background: "none", border: "none", cursor: "pointer" }}>
              <FiShoppingCart size={22} color="#000" strokeWidth={2} />
            </button>
          </li>
          <li>
            <button style={{ padding: "8px 18px", border: "none", borderRadius: "9px", backgroundColor: "#00A859", color: "white", fontSize: "14px", cursor: "pointer" }}>
              Contact Us
            </button>
          </li>
          {user ? (
            <li>
              <button onClick={handleLogout} style={{ padding: "8px 18px", border: "none", borderRadius: "9px", backgroundColor: "#F58634", color: "white", fontSize: "14px", cursor: "pointer" }}>
                Logout
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => navigate("/Login")} style={{ padding: "8px 18px", border: "none", borderRadius: "9px", backgroundColor: "#00A859", color: "white", fontSize: "14px", cursor: "pointer" }}>
                Login
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: "white",
          padding: "16px 20px",
          borderTop: "1px solid #eee",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <Link to="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", color: "#333", fontSize: "15px" }}>Home</Link>
          <button onClick={handleProducts} style={{ background: "none", border: "none", textAlign: "left", fontSize: "15px", color: "#333", cursor: "pointer", padding: 0 }}>Our Products</button>
          <a href="#" style={{ textDecoration: "none", color: "#333", fontSize: "15px" }}>Health Benefits</a>
          <a href="#" style={{ textDecoration: "none", color: "#333", fontSize: "15px" }}>Blog</a>
          <a href="#" style={{ textDecoration: "none", color: "#333", fontSize: "15px" }}>FAQs</a>
          <a href="#" style={{ textDecoration: "none", color: "#333", fontSize: "15px" }}>Contact Us</a>
          {user ? (
            <button onClick={handleLogout} style={{ padding: "10px", border: "none", borderRadius: "9px", backgroundColor: "#F58634", color: "white", fontSize: "15px", cursor: "pointer" }}>
              Logout
            </button>
          ) : (
            <button onClick={() => { navigate("/Login"); setMenuOpen(false); }} style={{ padding: "10px", border: "none", borderRadius: "9px", backgroundColor: "#00A859", color: "white", fontSize: "15px", cursor: "pointer" }}>
              Login
            </button>
          )}
        </div>
      )}

      <style>{`
        .mobile-icons {
          display: none !important;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-icons {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;