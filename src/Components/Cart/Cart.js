import { useContext } from 'react'
import Modal from '../UI/Modal'
import { Button } from 'react-bootstrap'
import classes from './Cart.module.css'
import CartContext from '../Context/CartContext'
import { FaTimes } from 'react-icons/fa';


const Cart=(props)=>{
    const ctx=useContext(CartContext)
    const cartElements=ctx.cart

    const RemoveItem = (name) =>{
        const newCart=cartElements.find((item)=>item.name === name )
        ctx.offCart(newCart)
    }

    const QuantityHandler=(event,title)=>{
        const change=cartElements.find((item)=>item.title===title)
        change.quantity=event.target.value
        ctx.quantityChange(change)
    }

    return(
        <Modal onClose={props.onClose}>
           <div className={classes.cartHead}>
              <h1 className={classes.heading}>Cart</h1>
              <div>
                <button className={classes.cartClose} onClick={props.onClose}><FaTimes/></button>
              </div>
           </div>
           <div className={classes.scroll}>
           <table className={classes.table} >
             <thead>
               <tr className={classes.headingRow}>
                <th className={classes.th}>Item</th>
                <th className={classes.th}>Price</th>
                <th className={classes.th}>Quantity</th>
               </tr>
             </thead>
             <tbody className={classes.scrollPart}>
             {
                cartElements.map((item,index)=>(
                    <tr key={index} className={classes.tr}>
                        <td className={classes.Item}>
                           <img src={item.imageUrl} alt={item.img} className={classes.img} />
                           <h5 className={classes.Title}>{item.title}</h5>
                        </td>
                        <td className={classes.Price}>
                            ${item.price}
                        </td>
                        <td className={classes.Quantity}>
                            <input type="number" value={item.quantity} onChange={(event)=>QuantityHandler(event,item.title)} min={1} className={classes.QuantityInput} />
                        </td>
                        <td className="removeButton">
                            <button className={classes.responsiveBtn} onClick={()=>RemoveItem(item.name)}><FaTimes/></button>
                        </td>
                    </tr>
                ))
             }
             </tbody>
           </table>
           </div>
           <h4 className={classes.amount}>Total : ${ctx.totalAmount}</h4>
           <div className={classes.purchaseButton}>
             <Button variant='primary' className='responsive-button'>Purchase</Button>
           </div>
        </Modal>
    )
}

export default Cart