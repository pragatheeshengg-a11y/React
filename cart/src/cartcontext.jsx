import { createContext, useState } from "react";

export const cartcreate=createContext();

export function Cartcon({children}){

    const [cart,setcart]=useState([]);

    function addtocart(product){
        setcart((prev)=>[...prev,product]);
    }
    return(
        <cartcreate.Provider
        value={{cart,addtocart}}>{children}

        </cartcreate.Provider>
    );
}