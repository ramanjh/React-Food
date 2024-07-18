import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from "../utils/CartSlice";

const ItemList = ({ items ,input, dummy}) => {

   // console.log(items);
   const dispatch = useDispatch();
   const handleAddItem = (item) => {
     dispatch(addItem(item));
     // alert('item added to your Cart');
   }
 
   const handleRemoveItem = (item) => {
     dispatch(removeItem(item));
   }
 
   const method = input === 'Remove' ? handleRemoveItem : handleAddItem ;
   const title = input === 'Remove' ? 'Remove item from Cart' : 'Add item to Cart';
   const btnValue = input === 'Remove' ? 'Delete' : 'Add+';
 
   // console.log(items[0]);
   
  
console.log(dummy);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-full">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

       {/* item-image */}
       
    {/* item-image */}
    <div className="w-3/12 ml-3 relative">
              <img src={CDN_URL + item?.card?.info?.imageId} className="rounded-xl"/>
              <button onClick={() => method(item)} title={title}
               className="
               bg-slate-300 font-normal text-base px-2 py-1 absolute rounded-lg rounded-tr-none rounded-bl-none right-0 bottom-0 hover:shadow-xl"
               > {btnValue} </button>
              </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;