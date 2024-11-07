import React from 'react';
import NavFarmer from "./NavFarmer";
import "../assets/Styles/farmerhome.css";

function FarmerHome() {

  return (
    <>
      <NavFarmer />
      <hr />
      <header className="section__container header__container">
        <h1 className="section__header">WELCOME FARMER</h1>
        <h2 className="heading">Category</h2>
      </header>
      <div className="container-fluid"></div>
        <div className="row">
          <div className="col-sm-3">
          <div className="card" >
                <img className="card-img-top" src="/Images/vegetables.webp" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Fruits</h5>
                  <p className="card-text">Total Number of Agricutural products categorized here.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  <p className="count">34</p>
                </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" >
            
                <img className="card-img-top" src="/Images/vegetables.webp" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Vegetables</h5>
                  <p className="card-text">The total number of products awailable here.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  <p className="count">123</p>
                </div>
            </div>

          </div>
          <div className="col-sm-3">
          <div className="card" >
                <img className="card-img-top" src="/Images/vegetables.webp" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Grains</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  <p className="count">200</p>
                </div>
            </div>
          </div>
          <div className="col-sm-3">
          <div className="card" >
                <img className="card-img-top" src="/Images/vegetables.webp" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Herbs</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  <p className="count">200</p>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default FarmerHome;
