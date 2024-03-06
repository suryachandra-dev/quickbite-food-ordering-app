import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, cartCount } from "./utils/cartSlice";
import { CART_URL } from "./utils/constants";
const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(cartCount(-100000));
    console.log("clearCart");
  };

  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <div className="text-center m-4 p-4">
      <div className="w-6/12 mx-auto">
        {cartItems.length !== 0 && (
          <button
            onClick={handleClearCart}
            className="p-2 m-2 bg-black text-white rounded-lg"
          >
            Clear Cart
          </button>
        )}
        {cartItems.length === 0 && (
          <div className="text-gray-600 ">
            <p className=" bg-white  flex justify-center h-[1px]  absolute ">
            
            </p>
            <div className=" flex justify-center ">
           <img className="w-72  " src={CART_URL} alt='Empty Cart'/>
           
            </div>
            <div>
              <p className="text-2xl font-bold">Your cart is empty</p>
            </div>
            <p className="text-lg">
              You can go to the home page to view more restaurants
            </p>
          </div>
        )}
        {cartItems.map((cartItem) => (
          <ItemList key={cartItem.card.info.name} {...cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
