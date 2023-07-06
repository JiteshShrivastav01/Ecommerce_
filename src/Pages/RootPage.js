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
        <div style={{minHeight:'100%',position:'relative'}} >
          <div >
            <MainNavbar onShow={showCartOnScreen}/>
            {showCart && <Cart  onClose={hideCart}/>}       
            <div style={{marginTop:'3.5rem'}}>
              {children}
            </div>
          </div>
          <div style={{position:'absolute',width:'100%',marginTop:'20vh'}}>
            <MainFooter/>
          </div>
        </div>
        </CartContextProvider>
    )
}

export default RootPage