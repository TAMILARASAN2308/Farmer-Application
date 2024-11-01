import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./Components/LandingPage"
import UploadProduct from "./Components/UploadProduct"
import ViewProducts from "./Components/ViewProducts"
import FarmerHome from "./Components/FarmerHome"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/farmer-home" element={<FarmerHome />} />
          <Route path="/upload-product" element={<UploadProduct />} />
          <Route path="/view-products" element={<ViewProducts />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App