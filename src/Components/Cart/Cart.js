import { useContext } from 'react'
import Modal from '../UI/Modal'
import { Button } from 'react-bootstrap'
import classes from './Cart.module.css'
import CartContext from '../Context/CartContext'


const Cart=(props)=>{
    const ctx=useContext(CartContext)
    const cartElements=ctx.cart

    const RemoveItem = (name) =>{
        const newCart=cartElements.find((item)=>item.name === name )
        ctx.offCart(newCart)
    }

    const QuantityHandler=(event,name)=>{
        const change=cartElements.find((item)=>item.name===name)
        change.quantity=event.target.value
        ctx.quantityChange(change)
    }

    return(
        <Modal onClose={props.onClose}>
           <div className={classes.cartHead}>
              <h1 className={classes.heading}>Cart</h1>
              <div className={classes.cartClose}>
                <Button variant="danger" className={classes.responsiveBtn1} onClick={props.onClose}>X</Button>
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
                           <img src={item.imageUrl} alt={item.title} className={classes.img} />
                           <h5 className={classes.Title}>{item.name}</h5>
                        </td>
                        <td className={classes.Price}>
                            ${item.price}
                        </td>
                        <td className={classes.Quantity}>
                            <input type="number" value={item.quantity} onChange={(event)=>QuantityHandler(event,item.name)} min={1} className={classes.QuantityInput} />
                        </td>
                        <td className="removeButton">
                            <Button className={classes.responsiveBtn} variant="danger" onClick={()=>RemoveItem(item.name)}>Remove</Button>
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