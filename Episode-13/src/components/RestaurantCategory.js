import ItemList from "./itemList";
import { useState } from "react";

const RestaurantCategory = (data,dummy)=> {

    
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
       setShowItems(x => !x);
      };

    return (
        <div>
            {/* Header */}
        <div className ="w-4/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">

        <div  className = "flex justify-between cursor-pointer" onClick={handleClick} title = "Click to show/hide Menu">

           <span className ="font-bold text-lg">
            {data.data.title} ({data.data.itemCards.length})</span>
            <span className="font-bold text-cyan-950">⬇️</span>
        </div>

            {/* Accordian Body */}

            {showItems && <ItemList items={data.data.itemCards} dummy={dummy}/>}

            </div>
        </div>
    );
};

export default  RestaurantCategory;