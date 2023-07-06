// import { Outlet } from "react-router-dom";
import MainNavbar from "../Components/Header/MainNavbar";
import MainFooter from "../Components/Header/MainFooter";
import CartContextProvider from "../Components/Context/CartContextProvider";
import Cart from "../Components/Cart/Cart";
import { useState } from "react";


const RootPage = ({children}) =>{
    const [showCart,setShowCart]=useState(false)
    const showCartOnScreen=()=>{setShowCart(true)}
    const hideCart=()=>{setShowCart(false)}
    return(
        <CartContextProvider>
          <MainNavbar onShow={showCartOnScreen}/>
          {showCart && <Cart  onClose={hideCart}/>}       
          {children}
          <MainFooter/>
        </CartContextProvider>
    )
}

export default RootPage