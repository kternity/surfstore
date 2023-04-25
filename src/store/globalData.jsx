import { useState } from "react";
import DataContext from "./dataContext";

function GlobalData(props){
const [cart, setCart] =useState ([]);
const [afskuser, setFakeUser] = useState ({name: "kenneth"});
//functions
function addProductsToCart(){
   console.log("Global is called");


   
}
function removeProductsFromCart(){}

return (
      <DataContext.Provider 
      value={{
      cart: cart,
      user: setFakeUser,
      addProductsToCart: addProductsToCart,
      removeProductsFromCart: removeProductsFromCart,
   }}
>
      {props.children}
      </DataContext.Provider>
   )
}
export default GlobalData;