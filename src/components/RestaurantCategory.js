import React from "react";
import ItemList from "./ItemList";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { Context1 } from "../App";
const RestaurantCategory = (props) => {
  console.log(props);
  const context = useContext(Context1);
  const myArray=context.myArray;
  const isClicked=context.isClicked;
  const setIsClicked=context.setIsClicked;
  const setMyArray=context.setMyArray;
  console.log(context,'RestaurantCategory called');
  console.log('set is click');
  // const [isOpen,setIsOpen]=useState(false);
  const itemCards = props.data.card.card.itemCards;
  const { title } = props.data.card.card;
  //   const [showItems, setShowItems] = useState(props.showItems);
  const { showItems } = props;
  // console.log('showItems', showItems);
  const { setShowIndex } = props;
  console.log(setShowIndex);

  // useEffect(() => {
  //   setIsClicked(false);
  // },[isClicked]);
  //   console.log(setShowIndex());
  //   console.log(props);
  // console.log(showItems);
  const handleClick = () => {
    //Never Update State variables Directly
    if(myArray.includes(title)) {
      console.log('my array if condition called');
      // setIsOpen(!isOpen);
      myArray.splice(0, myArray.length);
      // console.log(myArray);
      console.log(myArray);
      // debugger;
      setIsClicked(false);
      console.log(setShowIndex);


    }else{
      setIsClicked(true);
      myArray.splice(0, myArray.length, title);
      // console.log(myArray);
    }
    setMyArray(myArray);
    setShowIndex();

  };
  return (
    
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        {/* Header */}
        <span className="font-bold">
          {title}({itemCards.length})
        </span>
        <span className="font-bold text-xl">{showItems &&  isClicked ? '^': '˅' }</span>
      </div>

      {/* Accordion Body */}
      {showItems &&  isClicked &&
        itemCards.map((item) => {
          return <ItemList key={item.card.info.id} {...item} />;
        })}
    </div>
  );
};
export default RestaurantCategory;
