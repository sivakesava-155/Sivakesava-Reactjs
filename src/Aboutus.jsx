import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Aboutus() {
  let navigate = useNavigate();
  const images = [
    "About/vegi2.jpg",
    "About/fruit1.jpg",
    "About/milk4.jpg",
    "About/vegi1.jpg",
    "About/fruit2.jpg",
    "About/milk7.jpg",
    "About/vegi3.jpg",
    "About/fruit3.jpg",
    "About/milk5.jpg",
    "About/vegi4.jpg",
    "About/fruit4.jpg",
    "About/milk6.jpg",


  ];
  const totalSlides = images.length;

  // Slider logic
  const useSlider = (totalSlides, interval = 3000) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, interval);

      return () => clearInterval(timer);
    }, [totalSlides, interval]);

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    return { currentIndex, goToSlide };
  };

  const { currentIndex, goToSlide } = useSlider(totalSlides);

     

  return (
    <div className="aboutus">
      <header>
        <h1>Fresh Mart</h1>
        <p>Your Trusted Organic Food Store</p>
      </header>

      <section className="about">
        <div className="container">
          <div className="content">
            <h2>About Us</h2>
            <p>
              Welcome to <strong>Fresh Mart</strong>, where we bring you the
              freshest and healthiest organic produce. 
                Our mission is to promote
              healthy living by providing high-quality, farm-fresh vegetables
              and fruits straight to your doorstep.
            </p>
          </div>

          {/* Image Slider Section */}
          <div className="image">
          <div className="slider">
            <div className="slideshow-container">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`slides ${index === currentIndex ? "active" : ""}`}
                >
                  <img src={src} alt={`Slide ${index + 1}`} />
                </div>
              ))}
              <div className="dots-container">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>


          </div>
          {/* End of Slider Section */}

    
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose Fresh Mart?</h2>
        <ul>
          <li>✔ <strong>100% Pure Veg</strong></li>
          <li>✔ <strong>Ethically Sourced & Hygienic</strong></li>
          <li>✔ <strong>Quick & Hassle-Free Delivery</strong></li>
          <li>✔ <strong>100% Fresh & Quality Products</strong></li>
          <li>✔ <strong>Affordable Prices & Discounts</strong></li>
          <li>✔ <strong>Excellent Customer Support</strong></li>
        </ul>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To provide fresh, organic, and chemical-free vegetables to every
          household, promoting a healthier and greener world.
        </p>
      </section>

      <div className="cutter">
        <footer className="footer">
          <div>
            <h3 className="follow-title" style={{ color: "#800080" }}>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook" style={{ color: "blue" }}></i></a>
              <a href="#"><i className="fab fa-twitter" style={{ color: "blue" }}></i></a>
              <a href="#"><i className="fab fa-instagram" style={{ color: "palevioletred" }}></i></a>
              <p>📞 Contact: 123-456-7890</p>
            </div>
          </div>

          <div>
            <h3 className="quick-links-title">Quick Links</h3>
            <button onClick={() => navigate("/home")} style={{ background: "none", color: "blue", cursor: "pointer" }}>Home</button>
            <button onClick={() => navigate("/aboutus")} style={{ background: "none", color: "blue", cursor: "pointer" }}>About Us</button>
            <button onClick={() => navigate("/contactus")} style={{ background: "none", color: "blue", cursor: "pointer" }}>Contact Us</button>
          </div>
        </footer>

        <div className="copy">
          <center><p>© 2025 Fresh Mart. All Rights Reserved. ❤️ Developed by Sivakesava.</p></center>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
