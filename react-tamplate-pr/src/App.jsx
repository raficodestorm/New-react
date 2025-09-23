import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Master from './pages/Master';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
