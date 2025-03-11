import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./Home.css"; // Make sure to create this file for styling

function Home() {
  let navigate = useNavigate();

  // Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    ["About/vegi1.jpg", "About/vegi2.jpg", "About/vegi3.jpg","About/vegi4.jpg","About/vegi5.jpg"],  // Vegetables
    ["About/fruit1.jpg", "About/fruit2.jpg", "About/fruit3.jpg", "About/fruit4.jpg", "About/fruit5.jpg"],  // Fruits
    ["About/milk5.jpg", "About/milk4.jpg", "About/milk3.jpg","About/milk7.jpg","About/milk6.jpg"],  // Dairy
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides[0].length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="home-header">
        <h1>Welcome To Fresh Mart</h1>
        <p>Your one-stop shop for fresh and quality products</p>
        <p>100% Pure Veg</p>
      </header>

      <div className="home-container">
        <div className="category-section">
          {/* Vegetables Slider */}
          <div className="category-card">
            <img src={slides[0][currentIndex]} alt="Vegetables" />
            <button onClick={() => navigate("/veg")}>Explore Vegetables</button>
          </div>

          {/* Fruits Slider */}
          <div className="category-card">
            <img src={slides[1][currentIndex]} alt="Fruits" />
            <button onClick={() => navigate("/fruits")}>Explore Fruits</button>
          </div>

          {/* Milk & Dairy Slider */}
          <div className="category-card">
            <img src={slides[2][currentIndex]} alt="Milk & Dairy" />
            <button onClick={() => navigate("/milk")}>Explore Dairy</button>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default Home;
