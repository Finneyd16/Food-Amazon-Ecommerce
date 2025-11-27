import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Landing from './Pages/Landing';
import Footer from './Components/Footer';
import ORDERNOW from './Pages/Ordernow.jsx';
import OrdersGrid from './Components/Bulkorder.jsx';
import ScrollToTop from "./Components/scrollToTop.jsx";




const Display = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/OrdersGrid" element={<OrdersGrid />}></Route>
          <Route path="/ORDERNOW/:id" element={<ORDERNOW />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Display
