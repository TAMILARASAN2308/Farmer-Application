import '../assets/Styles/landingpage.css';

function LandingPage() {
  return (
    <>
      <div className="section1">
      <div className="heading-landing-page">
        <h1>Welcome To Farm 2 Home</h1>
        <h3>Connecting local farmers with consumers for fresh, organic produce.</h3>
      </div>
      <div className="image-container">
        <img src="/Images/Home1.jpg" alt="Farm to Home" />
      </div>
    </div>
    <div className="section2">
        <img src="/Images/Home3.jpg" alt="Farm to Home" />
      <section id="features" className="features">
        <h2>Our Features</h2>
        <div className="feature">
  <h3>Direct Sourcing</h3>
  <p>Enjoy fresh products sourced directly from local farmers, supporting sustainability and transparency.</p>
</div>
<div className="feature">
  <h3>Freshness Guaranteed</h3>
  <p>Experience the peak of freshness with each order, delivered straight from farm to table.</p>
</div>
<div className="feature">
  <h3>User-Friendly Interface</h3>
  <p>Our intuitive platform makes it easy for both farmers and shoppers to connect and navigate effortlessly.</p>
</div>
<div className="feature">
  <h3>Secure Payments</h3>
  <p>Shop with confidence through our reliable, secure payment system designed for peace of mind.</p>
</div>

       </section>
    </div>
    <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Sign up as a Farmer or Consumer.</li>
          <li>Farmers upload their products; consumers browse and add to cart.</li>
          <li>Complete the purchase and enjoy fresh produce at home.</li>
        </ol>
      </section>

      <section id="products" className="featured-products">
  <h2>Featured Products</h2>
  <div className="products-container">
    <div>
      <img src="/Images/Home1.jpg" alt="Fresh Fruits" />
      <h3>Fresh Fruits</h3>
      <p>Seasonal fruits sourced directly from local farmers.</p>
    </div>
    <div>
      <img src="/Images/Home1.jpg" alt="Fresh Vegetables" />
      <h3>Fresh Vegetables</h3>
      <p>Organic vegetables picked at their peak freshness.</p>
    </div>
    <div>
      <img src="/Images/Home1.jpg" alt="Farm Produce" />
      <h3>Farm Produce</h3>
      <p>Various farm products including herbs and grains.</p>
    </div>
  </div>
</section>


      <section id="why-choose-us" className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>We prioritize your health and support local farmers by ensuring the freshest products.</p>
        <ul>
          <li>High-quality organic produce</li>
          <li>Support local agriculture</li>
          <li>Affordable pricing</li>
          <li>Convenient home delivery</li>
        </ul>
      </section>
      <div className="feedback_container">
  <h1>Clients Feedback</h1>
  <div className="feedback">
    <div className="feedback_item">
      <img src="/Images/Home1.jpg" alt="Profile 1" className="profile_pic" />
      <h2>Elon Musk</h2>
      <p>"The quality of fresh produce is fantastic! It's great to support local farmers and receive top-notch products."</p>
      <div className="rating">
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
    <div className="feedback_item">
      <img src="/Images/Home1.jpg" alt="Profile 2" className="profile_pic" />
      <h2>Cristiano Ronaldo</h2>
      <p>"Incredible service! Fresh fruits and veggies delivered right to my door – couldn't be easier or fresher."</p>
      <div className="rating">
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
    <div className="feedback_item">
      <img src="/Images/Home1.jpg" alt="Profile 3" className="profile_pic" />
      <h2>David Goggins</h2>
      <p>"The best farm-to-home experience I’ve had! Top-quality produce and reliable delivery every time."</p>
      <div className="rating">
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  </div>
</div>
<footer className="footer" id="about_footer">
  <div className="section__container footer__container">
    <div className="footer__col">
      <h3>FARM TO HOME</h3>
      <p>
        Bringing Freshness to Your Doorstep. We connect local farmers with consumers,
        ensuring quality and freshness with every order.
      </p>
      <p>
        Our mission is to support sustainable farming and provide communities with
        fresh, locally-sourced produce. Taste the difference in every bite!
      </p>
    </div>
    <div className="footer__col">
      <h4>INFORMATION</h4>
      <p>Home</p>
      <p>About Us</p>
      <p>Our Farmers</p>
    </div>
    <div className="footer__col">
      <h4>CONTACT</h4>
      <p>Customer Support</p>
      <p>Press & Media</p>
      <p>Follow Us</p>
    </div>
  </div>
  <div className="section__container footer__bar">
    <p>Copyright © 2024 Farm To Home. All rights reserved.</p>
    <div className="socials">
      <span><i className="ri-facebook-fill"></i></span>
      <span><i className="ri-twitter-fill"></i></span>
      <span><i className="ri-instagram-line"></i></span>
      <span><i className="ri-youtube-fill"></i></span>
    </div>
  </div>
</footer>


    </>
  )
}

export default LandingPage