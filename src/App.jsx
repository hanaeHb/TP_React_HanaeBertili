import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductDetails from "./components/productDetails"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App
