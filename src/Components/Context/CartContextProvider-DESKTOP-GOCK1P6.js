import { useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import AuthContext from './AuthContext'



const CartContextProvider=(props)=>{
    const [cart,setCart]=useState([])
    const [totalAmount,setTotalAmount]=useState(0)
    const ctx=useContext(AuthContext)
    const UserEmail=ctx.email && ctx.email.replace(/[@,.]/g,'')

    const ShowCart=async ()=>{
      try{
        const response= await fetch(`https://ecommerce2-6ebd1-default-rtdb.firebaseio.com/${UserEmail}.json`)

        const data = await response.json()
        console.log(data)
      }
      catch(error){
        console.error('Error occurred when getting a movie:', error);
      }
    }

    const cartAddHandler = async (Item) => {
        try{
            const response= await fetch(`https://ecommerce2-6ebd1-default-rtdb.firebaseio.com/${UserEmail}.json`,   
            {
              method: 'POST',
              body: JSON.stringify({...Item, quantity:1}),
              headers: {
               'Content-Type': 'application/json'
             }
            })
            if (!response.ok) {
               throw new Error('Failed to fetch data');
            }
            ShowCart();
        }
        catch (error) {
            console.error('Error occurred while adding a movie:', error);
          }
    };

    const cartRemoveHandler=()=>{

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