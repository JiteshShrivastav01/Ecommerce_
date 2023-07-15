import { useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import AuthContext from './AuthContext'

const CartContextProvider=(props)=>{
    const [cart,setCart]=useState([])
    const [totalAmount,setTotalAmount]=useState(0)
    const ctx=useContext(AuthContext)
    const UserEmail=ctx.email && ctx.email.replace(/[@,.]/g,'')
    

   useEffect(()=>{
    async function ShowCart(){
      try{
        const response= await fetch(`https://ecommerce2-6ebd1-default-rtdb.firebaseio.com/UserCart/${UserEmail}.json`)
        
        const data=await response.json()
        console.log(data)
        
        const items=[]

        for(let key in data){
          items.push({
            id:key,
            title : data[key].title,
            author : data[key].author,
            price : data[key].price,
            imageUrl : data[key].imageUrl,
            quantity : data[key].quantity
          })
        }
        setCart(items)
      }
      catch(error){
        console.error('Error occurred when getting a movie:', error);
      }
    }
    ShowCart()
   },[UserEmail])

    const cartAddHandler = async (Item) => {
        try{
          const ExistingItemIndex=cart.findIndex(obj=>obj.title===Item.title)
          const ExistingItem=cart[ExistingItemIndex]
          console.log(ExistingItem,'ExistingItem')
          if(!ExistingItem){
            const response= await fetch(`https://ecommerce2-6ebd1-default-rtdb.firebaseio.com/UserCart/${UserEmail}.json`,   
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
            const data=await response.json()
            const newItem={...Item,quantity:1,id:data.name}
            setCart([...cart,newItem])
          }
          else{
            const updatedItem={...ExistingItem,quantity:ExistingItem.quantity+1}
            const updatedItems=[...cart]
            updatedItems[ExistingItemIndex]=updatedItem
            setCart(updatedItems)
            const response= await fetch(`https://ecommerce2-6ebd1-default-rtdb.firebaseio.com/UserCart/${UserEmail}/${ExistingItem.id}.json`,   
            {
              method: 'PUT',
              body: JSON.stringify(updatedItem),
              headers: {
               'Content-Type': 'application/json'
             }
            })
            if (!response.ok) {
               throw new Error('Failed to fetch data');
            }
          }
        }
        catch (error) {
            console.error('Error occurred while changing a movie:', error);
        }
    };

    const cartRemoveHandler=async (Item)=>{
      console.log(Item,'DeletingItem')
      const DeletingItem=cart.find(obj=>obj.title===Item.title)
      const updatedCart=cart.filter(obj=>obj.title!==Item.title)
      setCart(updatedCart)
      try{
        await fetch(`https://ecommerce2-6ebd1-default-rtdb.firebaseio.com/UserCart/${UserEmail}/${DeletingItem.id}.json`,{
          method:'DELETE'
        })
      }
      catch (error) {
        console.error('Error occurred while deleting a movie:', error);
      }
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