import { useEffect, useState } from "react";
import CartContext from "./CartContext";


const CartContextProvider=(props)=>{
    const [cart,setCart]=useState([])
    const [totalAmount,setTotalAmount]=useState(0)

    const cartAddHandler=(Item)=>{
        const isExistingInCart=cart.some(obj=>obj.title===Item.title)
        const findIndexInCart=cart.findIndex(obj=>obj.title===Item.title)
        if(isExistingInCart){
            setCart((prevCart)=>{
                const updatedCart = [...prevCart];
                    updatedCart[findIndexInCart].quantity += 1;
                return updatedCart;
            })        
        }
        else{
            Item={...Item , quantity:1}
            setCart([...cart,Item])
        }
    }
    
    const cartRemoveHandler=(Item)=>{
        setCart((prevCart)=>
            prevCart.filter((item)=>item.title !== Item.title)
        )
    }
    const quantityHandler=(Item)=>{
        setCart((prevCart)=>
            prevCart.map((item)=>{
              if(item.title===Item.title){
                return Item
              }
            return item})
           )
    }
    
    useEffect(() => {
        const calculateTotal = () => {
          let amount = 0;
          for (const item of cart) {
            amount += item.quantity * item.price;
          }
          return amount;
        };
    
        const totalAmount = calculateTotal();
    
        setTotalAmount(totalAmount);
      }, [cart]);
    
    

    const value={
        cart:cart,
        addToCart:cartAddHandler,
        offCart:cartRemoveHandler,
        totalAmount:totalAmount,
        quantityChange:quantityHandler
    }

    return(
        <CartContext.Provider  value={value}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider