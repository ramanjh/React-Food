import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockdata.js";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link} from "react-router-dom" ;
import { Swiggy_URL } from "../utils/constants.js";

const Body =()=>{
  const[listofRestaurants, setlistofRestaurants] = useState([]);

  const[filterdrestaurant, setfilterdrestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");
  
  // Whenever state Variable Update , react triggers a reconciliation cycle(re-render the component)

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(Swiggy_URL);
        
    const json = await data.json();

    // Optional Chaining

    setlistofRestaurants(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);

      setfilterdrestaurant(
        json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
      );

  };
  return listofRestaurants.length === 0 ? <Shimmer/>:

  (
      <div className="container-body">
      <div className="filter">
        <div div className="search">
        <input 
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e)=> {
              setsearchText(e.target.value)
 }}/>

 <button 
    onClick={()=> {
      // Filter the restaurant cards and update the UI
      // SearchText
    
    const filterdrestaurant = listofRestaurants.filter(
      (res) => {
        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
      });
       
          setfilterdrestaurant(filterdrestaurant);
    
    }}>search</button></div>
        <button 
          className= "filter-btn"
         onClick={()=> {
          const filteredList = listofRestaurants.filter(
            (res) => res.info.avgRating  > 4
          );
          setlistofRestaurants(filteredList);

        }} >Top Rated Restaurants</button>
        
      </div>
      <div className="restaurant-container">
    {filterdrestaurant.map((restaurant) =>(
     <Link key = {restaurant.info.id} to = {"restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant}/></Link>
  ))}
  
      
      </div>
      </div>
    )
  }
  
  
  export default Body;