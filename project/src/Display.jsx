import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/scrollToTop.jsx";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login.jsx";
import OrdersGrid from "./Components/Bulkorder.jsx";
import ORDERNOW from "./Pages/Ordernow.jsx";
import Register from "./Pages/Register.jsx";
import Carts from "./Pages/Carts.jsx";
import Checkout from "./Pages/Checkout.jsx";

const Layout = () => {
  const location = useLocation();

 
  const hideOn = ["/Login", "/login", "/Register"];

  const hideLayout = hideOn.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/OrdersGrid" element={<OrdersGrid />} />
        <Route path="/ORDERNOW/:id" element={<ORDERNOW />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Carts" element={<Carts />} />
        <Route path="/checkout" element={<Checkout />} />
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
