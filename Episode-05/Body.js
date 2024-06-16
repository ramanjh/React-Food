import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils.js/mockdata.js";
import { useState } from "react";

const Body =()=>{
  const[listofRestaurants, setlistofRestaurants]=useState(resList);
  console.log(listofRestaurants);
    return(
      <div className="body">
      <div className="filter">
        <button className= "filter-btn" onClick={()=> {
          const filteredList = listofRestaurants.filter(
            (res) => res.data.avgRating  > 4
          );
          setlistofRestaurants(filteredList);
        }}
        >
          Top Rated Restaurants</button>
      </div>
      <div className="res-container">
      
      {listofRestaurants.map((restaurant) =>(
     <RestaurantCard key ={restaurant.data.id}resData={restaurant}/>
  ))}
  
      
      </div>
      </div>
    )
  }
  
  
  export default Body;