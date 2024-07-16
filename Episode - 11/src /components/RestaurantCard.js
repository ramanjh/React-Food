import {CDN_URL} from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData}=props;
  
  const {name ,cuisines ,avgRating,costForTwo,deliverytime,cloudinaryImageId} = resData?.info;
  
    return(
      <div className="m-4 p-4 w-52 rounded-lg bg-gray-100 hover:bg-gray-400">
        <img 
          className="rounded-lg" 
          alt="res-logo"
          src= {CDN_URL+cloudinaryImageId}
          />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 className="font-bold text-md flex-wrap overflow-auto">{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliverytime}</h4>
      </div>
    );
  };

  // Higher Order Components 

  // Input -  RestaurantCard => RestaurantCardPromoted 

 export const withPromotedlabel = (RestaurantCard) => {
    return (props)=> {
      return (
        <div>
          <label className="absolute  bg-black text-white m-1 p-1 rounded-lg ">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
  };
  
  export default RestaurantCard;