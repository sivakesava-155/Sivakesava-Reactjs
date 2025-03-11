import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

function NotFound()
{

   let navigate=useNavigate();
   useEffect(()=>
   {
    setTimeout(()=>{
      navigate("/home")
    },3000),
    []}

    )
   

   
    return(
        <>
      <center><h1><img src="notfound.png"  width='30%'  height='20%'/></h1></center>
        </>
    )
}
export default NotFound


