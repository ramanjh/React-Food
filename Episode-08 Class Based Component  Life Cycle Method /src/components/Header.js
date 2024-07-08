import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import Body from "./Body";

const Header=()=>{
  const [btnNameReact ,  setBtnNameReact] = useState("Login");
    return(
      <div className="header">
      <div className="logo-container">
       <img className="logo"
       src={LOGO_URL}/>
       </div>
  <div className="nav-items">
   <ul>
    <li><Link to = "/">Home</Link></li>
    <li><Link  to ="/About">About Us</Link></li>
    <li><Link to ="/Contact">Contact Us</Link></li>
    <li><Link  to ="/Cart">Cart</Link></li>
   
    <button 
     className="login"
     onClick={()=>{
       btnNameReact === "Login"
       ? setBtnNameReact("Logout")
       : setBtnNameReact("Login");

     }}>{btnNameReact}</button>

   </ul>
   </div>
  </div>
     
  );
  };
  
  export default Header;