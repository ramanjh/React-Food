import { useState,useContext } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import Body from "./Body";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header=()=>{
  const [btnNameReact ,  setBtnNameReact] = useState("Login");

const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);

//console.log(data); //loggedInUser const data = usecontext(usercontext);


    return(

      <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
       <img className="w-36"
       src={LOGO_URL}/>
       </div>

  <div className="flex items-center">
   <ul className="flex p-4 m-4">
    <li className="px-4">Online Status: {onlineStatus ? "🟢":"🔴"} </li>
    <li className="px-4"><Link to = "/">Home</Link></li>
    <li className="px-4"><Link  to ="/About">About Us</Link></li>
    <li  className="px-4"><Link to ="/Contact">Contact Us</Link></li>
    <li className="px-4"><Link to ="/Grocery">Grocery</Link></li>
    <li className="px-4"><Link  to ="/Cart">Cart</Link></li>
   
    <button 
     className="login"
     onClick={()=>{
       btnNameReact === "Login"
       ? setBtnNameReact("Logout")
       : setBtnNameReact("Login");

     }}>{btnNameReact}</button>

     <li className="px-4 font-bold">{loggedInUser}</li>

   </ul>
   </div>
  </div>
     
  );
  };
  
  export default Header;