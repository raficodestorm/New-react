import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import BusEntry from "./pages/Busentry";


function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <main style={{ flex: 1 }}>
        <Header />
        <div className="container-fluid mt-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="./pages/Busentry.jsx" element={<BusEntry />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
