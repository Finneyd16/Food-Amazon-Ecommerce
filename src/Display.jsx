import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login.jsx";
import OrdersGrid from "./Components/Bulkorder.jsx";
// import Ordernow from "./Pages/Ordernow.jsx";
import Register from "./Pages/Register.jsx";
import Carts from "./Pages/Carts.jsx";
import Checkout from "./Pages/Checkout.jsx";
import OurProducts from "./Pages/OurProducts.jsx";
import Verify from "./Pages/Verify";
import { AdminRoute } from "./Components/ProtectedRoute";
import AdminDashboard from "./Pages/Admin/AdminDashboard";

const Layout = () => {
  const location = useLocation();


  const hideOn = ["/Login", "/login", "/Register"];
  const isAdminPage = location.pathname.startsWith('/Admin');
  
  const hideLayout = hideOn.includes(location.pathname) || isAdminPage;

  return (
    <>
      {!hideLayout && <Header />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/OrdersGrid" element={<OrdersGrid />} />
        {/* <Route path="/Ordernow/:id" element={<Ordernow />} /> */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Carts" element={<Carts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/OurProducts" element={<OurProducts />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard/></AdminRoute>} />
       
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

const Display = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default Display;
