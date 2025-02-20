import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Orders from "./Orders";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Milk from "./Milk";
import Cart from "./Cart";
import NotFound from "./NotFound";
import Login from "./Login";
import { logout } from "./store";

import "./navbar.css"

function App()
{
    const cart=useSelector(state=>state.Cart);
    const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0)
    let { isAuthenticated, user } = useSelector((state) => state.auth);
      let dispatch=useDispatch()
   return(
    <>
    
    <BrowserRouter>
    <nav className="navbar">
    
    <Link to='/home' className="myclass"><i class="fa-solid fa-house"></i>




    Home</Link>
    <Link to='/veg'className="myclass"><i class="fa-solid fa-carrot"></i>Vegetables</Link>
    <Link to='/nonveg'className="myclass"><i className="fa-solid fa-apple-whole"></i>fruits</Link>
    <Link to='/milk'className="myclass"><span role="img" aria-label="milk" >🥛</span>


    Milkitems</Link>
    <Link to='/aboutus'><i class="fas fa-user-circle"></i>
    Aboutus</Link>
    <Link to='/contactus'><i className="fas fa-phone-volume"></i>


    Contactus</Link>
    <Link to='/cart'className="myclass"><i className="fas fa-shopping-cart"></i> 
    Cart<span className="cartcount">{totalItems}</span></Link>
    <Link to='/orders'className="myclass" ><i className="fas fa-history" style={{color:""}}></i> Orders</Link>
    {
    isAuthenticated?
    <><p style={{color:"white"}}><strong>welcome to Fresh Mart</strong> </p>
    <button onClick={()=>dispatch(logout())}>Logout</button>
    
    </>
    :
    <>
      <Link to='/login'className="myclass"><i class="fa-solid fa-arrow-right-to-bracket"></i> Signin</Link>
    </>
    }
    </nav>
    <div className="">
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/veg" element={<Veg/>}/>
      <Route path="/nonveg" element={<Nonveg/>}/>
      <Route path="/milk" element={<Milk/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<NotFound/>}/>
    
     </Routes>
     </div>
    </BrowserRouter>

    </>


   )

}
export default App;