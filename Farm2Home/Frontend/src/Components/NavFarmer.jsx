import { Link } from "react-router-dom"
import "../assets/Styles/navfarmer.css"


function NavFarmer() {
  return (
    <>
    <nav className="nav_bar">
        <div className="nav__logo">FARM 2 HOME</div>
        <ul className="nav__links">
           <li className="link"><Link to="/farmer-home">Home</Link></li>
           <li className="link"><Link to="/upload-product">Upload Product</Link></li>
           <li className="link"><Link to="/view-products">View Products</Link></li>
           <li className="link"><Link to="/consumer-requests">Consumer Requests</Link></li>
        </ul>
        <Link to="/"><button className="btn">LOGOUT</button></Link>
    </nav>
    </>
  )
}

export default NavFarmer