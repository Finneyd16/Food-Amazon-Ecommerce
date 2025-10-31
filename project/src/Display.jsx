import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Landing from './Pages/Landing';
import Footer from './Components/Footer';



const Display = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Landing/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default Display
