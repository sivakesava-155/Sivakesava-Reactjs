import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrement, increment, purchasedetails, remove } from "./store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Cart() {
  
  let cartObjects = useSelector((state) => state.Cart);
  let { isAuthenticated } = useSelector((state) => state.auth);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let totalPrice = cartObjects.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [showDiscountPrice, setShowDiscountPrice] = useState(false);
  let discountAmount = (totalPrice * discountPercentage) / 100;
  

  let [cuponcode, setCuponcode] = useState('');
  let [cuponcodeDiscountPer, setCuponcodeDiscountPer] = useState(0);
  const [showCuponDiscount, setShowCuponDiscount] = useState(false);

  let handleCuponCode = () => {
    switch (cuponcode.toUpperCase()) {
      case 'SIVA10':
        setCuponcodeDiscountPer(10);
        break;
      case 'SIVA20':
        setCuponcodeDiscountPer(20);
        break;
      case 'SIVA30':
        setCuponcodeDiscountPer(30);
        break;
      default:
        alert("Invalid coupon code");
        setCuponcodeDiscountPer(0);
    }
  };

  let cuponDiscountAmount = (totalPrice * cuponcodeDiscountPer) / 100;

  let finalAmount = totalPrice - discountAmount-cuponDiscountAmount;

  const handlePurchase = () => {
    isAuthenticated
      ? (() => {
          let purchaseDetails = {
            items: [...cartObjects],
            total: finalAmount,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          };
          dispatch(purchasedetails(purchaseDetails));
          dispatch(clearCart());
        })()
      : (() => {
          alert("Please login to proceed with the purchase.");
          navigate("/login");
        })();
  };

  return (
    <div className="cart-container">
      {cartObjects.length > 0 ? (
        <>
          <h2>Your Cart</h2>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartObjects.map((item, index) => (
                <tr key={index}>
                  <td><figure><img src={item.image} alt={item.name} className="cart-image" /><center><strong>{item.name}</strong></center></figure></td>
                  <td><strong>₹{item.price}</strong></td>
                  <td><strong>{item.quantity}</strong></td>
                  <td className="action">
                    <button className="action-button increment" onClick={() => dispatch(increment(item))}>+</button>
                    <button className="action-button decrement" onClick={() => dispatch(decrement(item))}><stong>-</stong></button>
                    <button className="action-button remove" onClick={() => dispatch(remove(item))}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
            <div className="discount">
          <p><strong>Your Total Price: ₹{totalPrice}</strong></p>

          {showDiscountPrice && (
            <div className="discount-section">
            <strong> <p>Applied Discount: {discountPercentage}%</p>
              <p>Discount Amount: ₹{discountAmount}</p></strong> 
            </div>
          )}

          <p><strong>Your Net Amount to Pay: ₹{finalAmount}</strong></p>

          <button className="action-button" onClick={() => { setDiscountPercentage(10); setShowDiscountPrice(true); }}>10% Discount</button>
          <button className="action-button" onClick={() => { setDiscountPercentage(20); setShowDiscountPrice(true); }}>20% Discount</button>
          <button className="action-button" onClick={() => { setDiscountPercentage(30); setShowDiscountPrice(true); }}>30% Discount</button>

          <div className="discount-section">
            <input type="text" className="discount-input" value={cuponcode} onChange={(e) => setCuponcode(e.target.value)} placeholder="Enter Coupon Code" />
            <button className="apply-button" onClick={() => { handleCuponCode(); setShowCuponDiscount(true); }} style={{color:'black'}}>Apply</button>
          </div>

          {showCuponDiscount && (
            <div className="discount-section">
              <p>Coupon Discount: {cuponcodeDiscountPer}%</p>
              <p>Coupon Discount Amount: ₹{cuponDiscountAmount}</p>
            </div>
          )}

          <button className="purchase-button" onClick={handlePurchase}>Complete Purchase</button>
          </div>
        </>
      ) : (
        <div>
        <h2 className="empty-cart"><strong>Your Cart is Empty</strong></h2>
        <img src="milk/cart.jpg" width='50%' height='50%' onClick={()=>navigate("/home")}></img>
        </div>
      )}
    </div>
  );
}

export default Cart;
