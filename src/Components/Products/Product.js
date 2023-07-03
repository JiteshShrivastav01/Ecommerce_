import { Button } from 'react-bootstrap'
import classes from './Product.module.css'
import CartContext from '../Context/CartContext'
import { useContext } from 'react'
import Card from '../UI/Card'


const ProductsOnScreen=()=>{
    const productsArr = [
        {
        name:'Album 1',
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        
        {
        name:'Album 2',
        title: 'Black and white Colors', 
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        
        {
        name:'Album 3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        
        {
        name:'Album 4',
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]

    const ctx=useContext(CartContext)
        
    const AddCart=(ItemName)=>{
      const newCartItem=productsArr.find((item)=>item.name===ItemName)
      ctx.addToCart(newCartItem)
    }


    return(
        <>
        <div className={classes.ProductsScreen}>
        <p className={classes.heading}>Music</p>
        <div className={classes.MusicProducts}>
          {productsArr.map((product, index) => (
            <Card>
            <div key={index} className={classes.product}>
             <h2>{product.name}</h2>
             <img src={product.imageUrl} alt={product.title} style={{ width: '200px' }} />
             <div className={classes.Price}>
                <h4>${product.price}</h4>
                <Button className='responsive-button' variant='primary' onClick={()=>AddCart(product.name)}>Add to Cart</Button>
             </div>
            </div>
            </Card>
          ))}
        </div>
        </div>
        </>
    )
}

export default ProductsOnScreen