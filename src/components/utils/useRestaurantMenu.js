import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu=(resId)=>{
        const [resInfo,setResInfo]=useState(null);
        useEffect(()=>{
                fetchData();
                console.log('USE RESTAURANT MENU USE EFFECT');
        },[]);
        const fetchData=async()=>{
            console.log(MENU_API_URL+resId.replace(/\D/g, "")+"&catalog_qa=undefined&submitAction=ENTER");
            const data=await fetch(MENU_API_URL+resId.replace(/\D/g, "")+"&catalog_qa=undefined&submitAction=ENTER");
            const json =await data.json();
            console.log('USE RESTAURANT MENU FETCH DATA');
            console.log(json);
            setResInfo(json);
        }
    return resInfo;
}
export default useRestaurantMenu;