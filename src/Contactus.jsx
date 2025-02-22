
import React from 'react';
import './ContactUs.css';
import { useNavigate } from 'react-router-dom';

function Contactus  ()  {

  let navigate=useNavigate()

  return (
         <>
    <center ><h1 className="header">Contact US</h1></center>
    <div className="contact-container">
     
      
      <div className="contact-content">
        <div className="contact-info-section">
          <h2 className="section-title"style={{color:'blue'}}>Get in Touch</h2>
          
          <div className="contact-details">
            <div className="contact-card">
              <i className="fas fa-envelope"   style={{color:'blue'}}></i>
              
              <p>Email: sivakesava155@gmail.com</p>
            </div>
            
            <div className="contact-card">
              <i className="fas fa-phone"   style={{color:'blue'}}></i>
              <p>Phone: 9121676672</p>
            </div>
            
            <div className="contact-card">
              <i className="fas fa-map-marker-alt"   style={{color:'green'}}></i>
        

                <p>Address:        Andrapredesh India</p>
            </div>
          </div>

          <div className="social-section">
            <h3 className="follow-title" style={{color:'#800080'}}>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook" style={{color:'blue'}}></i></a>
              <a href="#"><i className="fab fa-twitter"style={{color:'blue'}}></i></a>
              <a href="#"><i className="fab fa-instagram" style={{color:'rgb(216, 112, 183)'}}></i></a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2 className="section-title"   style={{color:'orange'}}>Send Us a Message</h2>
          
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your message"></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <hr></hr>
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
};

export default Contactus;
