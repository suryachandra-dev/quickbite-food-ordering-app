import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, cartCount } from "./utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(cartCount(-100000));
    console.log('clearCart');
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
          <div className="text-gray-600">
           <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19c0 1.1.9 2 2 2s2-.9 2-2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 10V5a1 1 0 011-1h4a1 1 0 011 1v5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 10.5V21H8V10.5"
                />
              </svg>
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
