import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admindash />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
