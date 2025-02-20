import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";

function Veg() {
  const vegItems = useSelector((state) => state.Products.Veg);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [filters, setFilters] = useState({ price50To150: false, price150To250: false });

  const perPage = 10;

  const handleFilterChange = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const filteredItems = vegItems.filter((item) => {
    if (!item.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (filters.price50To150 && !(item.price >= 50 && item.price <= 150)) return false;
    if (filters.price150To250 && !(item.price >= 150 && item.price <= 250)) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredItems.length / perPage);
  const paginatedItems = filteredItems.slice((pageNumber - 1) * perPage, pageNumber * perPage);

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

        {/* Filter Checkboxes */}
        <div className="filter-container">
          {["price50To150", "price150To250"].map((filter, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={filters[filter]}
                onChange={() => handleFilterChange(filter)}
              />
              {filter === "price50To150" ? "₹50 - ₹150" : "₹150 - ₹250"}
            </label>
          ))}
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {paginatedItems.length ? (
            paginatedItems.map((item, index) => (
              <div className="veg-container" key={index}>
                <img src={item.image} alt={item.name} className="product-image" />
                <p className="product-name">{item.name} </p>
                <p className="product-price">₹{item.price}</p>
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
        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              disabled={pageNumber === 1}
              className="action-button"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => setPageNumber(page)}
                className={`page-button ${pageNumber === page ? "page-active" : ""}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setPageNumber((prev) => Math.min(prev + 1, totalPages))}
              disabled={pageNumber === totalPages}
              className="action-button"
            >
              Next
            </button>
          </div>
        )}
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

export default Veg;
