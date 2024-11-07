import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./Components/LandingPage"
import UploadProduct from "./Components/UploadProduct"
import ViewProducts from "./Components/ViewProducts"
import FarmerHome from "./Components/FarmerHome"
import ConsumerRequests from "./Components/ConsumerRequests"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/farmer-home" element={<FarmerHome />} />
          <Route path="/upload-product" element={<UploadProduct />} />
          <Route path="/view-products" element={<ViewProducts />} />
          <Route path="/consumer-requests" element={<ConsumerRequests />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
