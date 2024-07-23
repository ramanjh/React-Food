
import { useSelector, useDispatch } from "react-redux"; // useSelector to subscribe to specific/whole part of store
import { removeItem, clearCart } from "../utils/CartSlice";
import ItemList from "./itemList";

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items); // cartItems is subscribed to 'items' in Cart-Slice
  // console.log('items in your cart:', cartItems.length);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    // <>
    //   <div>Cart page</div>
    //   <button onClick={handleRemoveItem} className="block">delete 1 item</button>
    //   <button onClick={handleClearCart} className="block">clear Cart</button>
    // </>
    <div className="text-center w-6/12 mx-auto">
      <h1 className="font-bold my-6 text-2xl">Cart ({cartItems.length} items)</h1>
      <button onClick={handleClearCart} className="text-lg px-4 py-2 bg-gray-300 rounded-lg">Clear your Cart</button>
      <ItemList items={cartItems} input={'Remove'}/>
    </div>
  )
};

export default Cart;
