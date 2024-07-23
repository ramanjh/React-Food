import RestaurantCard, {withPromotedlabel} from "./RestaurantCard.js";
import resList from "../utils/mockdata.js";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link} from "react-router-dom" ;
import { rescard_URL } from "../utils/constants.js";
import OnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";


const Body =()=>{
  const[listofRestaurants, setlistofRestaurants] = useState([]);

  const[filterdrestaurant, setfilterdrestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withPromotedlabel(RestaurantCard);
  
  // Whenever state Variable Update , react triggers a reconciliation cycle(re-render the component)

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(rescard_URL);
        
    const json = await data.json();


    // Optional Chaining

    setlistofRestaurants(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);

      setfilterdrestaurant(
        json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
      );

  };

const onlineStatus = OnlineStatus ();
  
 if (onlineStatus === false ) return (
<h1>
  Looks like You are offline!! Please check your internet connection 
</h1>
 );

const {setUserName, loggedInUser} = useContext(UserContext);

  return listofRestaurants.length === 0 ? <Shimmer/>:

  (
      <div className="container-body">
      <div className="filter flex">
        < div className="search m-4 p-4">
        
        <input 
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e)=> {
              setsearchText(e.target.value)
 }}/>

 <button className="px-3 py-2 bg-green-100 m-4 rounded-lg"
    onClick={()=> {
      // Filter the restaurant cards and update the UI
      // SearchText
    
    const filterdrestaurant = listofRestaurants.filter(
      (res) => {
        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
      });
       
          setfilterdrestaurant(filterdrestaurant);
    
    }}>search</button>
    </div>
    <div className="search m-4 p-4 flex items-center">
      <button 
          className= "px-4 py-2 bg-gray-100 rounded-lg"
         onClick={()=> {
          const filteredList = listofRestaurants.filter(
            (res) => res.info.avgRating  > 4
          );
          setlistofRestaurants(filteredList);

        }}> Top Rated Restaurants </button>
   </div>

        <div className="search m-4 p-4 flex items-center">
          <label>UserName   : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />

        </div>
      </div>
      <div className="flex flex-wrap">
    {filterdrestaurant.map((restaurant) =>(
     <Link key = {restaurant.info.id} to = {"restaurants/"+ restaurant.info.id}>
      { (restaurant.info.avgRating>4) ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard  resData={restaurant} />)} 
       </Link>

  ))}
  
      
      </div>
      </div>
    );
  };
  
  
  export default Body;

  // if the restaurant is promoted then add promoted label to it.