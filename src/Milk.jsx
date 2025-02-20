import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";

function Milk() {
  let milkItems = useSelector((state) => state.Products.Milk);
  let dispatch = useDispatch();
  let navigate=useNavigate()

  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const perPage = 10;

  const filteredItems = milkItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / perPage);
  const pageEndItemIndex = perPage * pageNumber;
  const pageStartItemIndex = pageEndItemIndex - perPage;
  const paginatedItems = filteredItems.slice(pageStartItemIndex, pageEndItemIndex);

  const handlePageNumber = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPageNumber(page);
    }
  };

  return (
    <>
      <div className="milk-container">
     <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPageNumber(1);
          }}
          className="search-input"
        />

        {/* Product Grid */}
        <div className="product-grid">
          {paginatedItems.length > 0 ? (
            paginatedItems.map((item, index) => (
              <div className="veg-container" key={index}>
                 <img src={item.image} alt={item.name} className="product-image" />
                <p className="product-name">{item.name} </p>
                 <p className="product-name" >  ₹{item.price}</p>
                <button onClick={() => dispatch(addToCart(item))} className="action-button">
                  Add to cart
                </button>
              </div>
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <button
            onClick={() => handlePageNumber(pageNumber - 1)}
            disabled={pageNumber === 1}
            className="action-button"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageNumber(page)}
              className={`page-button ${pageNumber === page ? "page-active" : ""}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageNumber(pageNumber + 1)}
            disabled={pageNumber === totalPages}
            className="action-button"
          >
            Next
          </button>
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

export default Milk;
