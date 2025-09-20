

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Head from './Heads'
import Bloging from "./pages/blog";
function App() {

  return (
    <>
    <Head></Head>
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/pages/blog" element={<Bloging />} />
      <Route path="/pages/Contactp" element={<Conta />} />
    </Routes>
  </BrowserRouter>,
    </div>
    </>
  )
}

export default App

