//import { Menu_api } from "../utils/constants";
//import { useEffect,useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState } from "react";
import {useParams } from "react-router-dom";

const RestaurantMenu = ()=> {

    //const[resInfo, setresInfo] = useState(null);

    const dummy = "Dummy Data"
    
  const { resId } = useParams();

  

const resInfo = useRestaurantMenu(resId);

const [showIndex, setShowIndex] = useState(1);  // this should be here(above the return) or will cause 'rendered more hooks than previous'


/*useEffect(()=> {
      fetchMenu();
    },[]);

    const fetchMenu = async ()=> {
        const data = await fetch(Menu_api+resId);
        
        const json = await data.json();
        
    console.log(json);

        setresInfo(json.data);
    }; */

    if ( resInfo === null) return <Shimmer/> ;

const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    

    
// const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;



    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

   // console.log(categories);

    


    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="ont-bold text-lg">
                {cuisines.join( ",")} - {costForTwoMessage}
         </p>


 {/* categories accordions */}

 {categories.map((category, index) => (

        // controlled component

        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
           if (showIndex === index)
            setShowIndex(-1); // to toggle the current toggled category
            else
              setShowIndex(index);

              dummy = {dummy}
          }}/>

            ))}
  </div>
    );
};

export default RestaurantMenu ;

