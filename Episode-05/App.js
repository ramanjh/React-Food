import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import RestaurantCard from "./src/components/RestaurantCard";
import { CDN_URL, LOGO_URL } from "./src/utils.js/constants";







const AppLayout = ()=>{
  return( 
  <div className="App">
    
    <Header/>
    <Body/>
  </div>

  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);