
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Bloging from './pages/blog'
import Conta from "./pages/Contactp";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/pages/blog" element={<Bloging />} />
      <Route path="/pages/Contactp" element={<Conta />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

