import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "./utils/constants";
import { addToCart, removeFromCart, clearCart } from "./utils/cartSlice";
import { useState, useEffect } from "react";
const ItemList = (props) => {
  // const [count,setCount]=useState(0);
  const { id, name, price, description, defaultPrice, imageId } =
    props?.card?.info;
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem(`${id}_count`);
    return storedCount ? parseInt(storedCount) : 0;
  });
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalCartItems = useSelector((store) => store.cart.totalItems);
  console.log("totalCartItems: ", totalCartItems);
  console.log(cartItems, "Cart called");
  useEffect(() => {
    localStorage.setItem(`${id}_count`, count.toString());
  }, [count, id]);
  useEffect(() => {
    // Reset count to 0 when totalCartItems becomes 0
    if (totalCartItems === 0) {
      setCount(0);
    }
  }, [totalCartItems]);
  console.log(count);
  console.log(props);

  const handleAddItems = (item) => {
    //Dispatch an action
    console.log("handleAddItems", item);
    dispatch(addToCart(item));
    setCount(count + 1);
    // dispatch(cartCount(1));
  };
  //   const handleRemoveItems = (item) => {
  //     //Dispatch an action
  //     console.log(item);
  //     if(totalCartItems>0 && count>0) {
  //       setCount(count-1);
  // console.log('handleRemoveItems');
  //       dispatch(removeFromCart({item,count}));// Pass count with the action payload
  //       // dispatch(cartCount(-1));
  //     }
  //   }
  const handleRemoveItems = (item) => {
    // Dispatch an action
    console.log(item);
    if (totalCartItems > 0 && count > 0) {
      if (count === 1) {
        setCount(0); // Reset count to 0 if removing the last item
        dispatch(removeFromCart({ item, count })); // Pass count with the action payload
      } else {
        setCount(count - 1); // Decrement count by 1 if there are more items
        dispatch(removeFromCart({ item, count })); // Pass count with the action payload
      }
    }
  };

  const cartItemIncreaseDecrease = (props) => {
    return (
      <>
        {count < 1 ? (
          <button className=" p-1" onClick={() => handleAddItems(props)}>
            ADD
          </button>
        ) : (
          <>
            <button
              className="mr-2 ml-2"
              onClick={() => handleRemoveItems(props)}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="ml-2 mr-2 "
              onClick={() => handleAddItems(props)}
            >
              +
            </button>
          </>
        )}
      </>
    );
  };

  return (
    <div className="p-2 m-2  border-gray-200 border-b-2 text-left flex ">
      <div className="w-9/12">
        <div className="py-2">
          <span>{name}-</span>
          <span>&nbsp;&#8377;{price ? price / 100 : defaultPrice / 100}</span>
        </div>
        <div>
          <p className="text-xs">{description}</p>
        </div>
      </div>
      <div className="w-3/12 p-4 relative">
        <div className="absolute right-3">
          <button className="p-0.5   rounded-lg bg-black shadow-lg text-white">
            {cartItemIncreaseDecrease({ ...props })}
          </button>
        </div>
        {imageId ? <img src={CDN_URL + imageId}></img> : null}
      </div>
    </div>
  );
};
export default ItemList;
