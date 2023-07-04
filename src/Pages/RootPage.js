import { Outlet } from "react-router-dom";
import MainNavbar from "../Components/Header/MainNavbar";
import MainFooter from "../Components/Header/MainFooter";
import Header from "../Components/Header/Header";
import CartContextProvider from "../Components/Context/CartContextProvider";
import Cart from "../Components/Cart/Cart";
import { useState } from "react";


const RootPage = () =>{
    const [showCart,setShowCart]=useState(false)
    const showCartOnScreen=()=>{setShowCart(true)}
    const hideCart=()=>{setShowCart(false)}
    return(
        <CartContextProvider>
          <MainNavbar onShow={showCartOnScreen}/>
          <Header/>
          {showCart && <Cart  onClose={hideCart}/>}       
          <Outlet/>
          <MainFooter/>
        </CartContextProvider>
    )
}

export default RootPage