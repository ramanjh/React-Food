import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import RestaurantCard from "./src/components/RestaurantCard";
import {LOGO_URL, CDN_URL} from "./src/utils/constants";
import About from "./src/components/About ";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
// import Grocery from "./src/components/Grocery";

// Chunking 
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading


        {/** if path = / */}
        <Body/>
        {/** if path =/about */}
        <About/>
        {/** if path =/contact */}
        <contact/>

    const Grocery = lazy(()=> import("./src/components/Grocery"));    
    

const AppLayout = ()=>{
  return( 
  <div className="App">
    
    <Header/>
    <Outlet/>
    <Footer/>

  </div>

  );
};

const appRouter = createBrowserRouter([
  {
     path:"/" ,
     element:<AppLayout/> ,
     children: [
      {
        path: "/",
        element:<Body/> ,
      },
      {
        path: "/About" ,
        element: <About/> ,
      }
      ,
      {
        path: "/Contact" ,
        element: <Contact/> ,
      },

      {
        path : "/Grocery",
        element: <Suspense fallback = {<Shimmer/>}><Grocery/></Suspense>,
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },

     ],
     errorElement : <Error/> ,
  },
 
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

