import {BrowserRouter, Routes, Route} from "react-router"
import Head from './Heads'
import Homee from "./Pages/Home"
import Blogging from "./Pages/Blog"
import Server from "./Pages/Service"
import Contacting from "./Pages/Contact"

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/Blog" element={<Blogging />} />
        <Route path="/Contact" element={<Contacting />} />
        <Route path="/Service" element={<Server />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
