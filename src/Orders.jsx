import { useSelector } from "react-redux";

function Orders() {
    const purchaseHistory = useSelector(state => state.PurchaseDetails);

    return (
        <div className="orders-container">
            {purchaseHistory.length === 0 ? (
                <h1 className="no-history"><strong>No Purchase History! please place a order</strong></h1>
            ) : (
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Date&Time</th>
                            <th>Total Amount</th>
                            <th>Items Purchased</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseHistory.map((purchase, index) => (
                            <tr key={index}>
                                <td>{purchase.date}<br/>
                                {purchase.time}</td>
                                <td>₹{purchase.total}</td>
                                <td>
                                
                                    <ul>    
                                    <div className="orders-table tr">   
                                 {purchase.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                  <td><figure><img src={item.image} alt={item.name} className="order-image" /><center><strong>{item.name}</strong></center></figure>  ₹{item.price} (Qty: {item.quantity})</td>
                                            </li>
                                        ))}
                                       </div>   
                                    </ul>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Orders;
