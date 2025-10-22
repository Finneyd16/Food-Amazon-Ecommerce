import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Landing from './Pages/Landing';

const Display = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default Display
