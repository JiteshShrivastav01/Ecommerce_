import { Button } from 'react-bootstrap'
import classes from './Product.module.css'
import CartContext from '../Context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const ProductsOnScreen=()=>{
    const productsArr = 
    [
      {
        title: "The Enigma Code",
        author: "Jonathan Anderson",
        genre: "Mystery/Thriller",
        price: 12.99,
        imageUrl: "https://th.bing.com/th/id/R.ad861febe6231617765ca6dd3bf12fec?rik=8IRy7H%2bpiA1ktA&riu=http%3a%2f%2fwww.metalmusicarchives.com%2fimages%2fcovers%2fthe-enigma-code-demo(demo)-20171124074857.jpg&ehk=c%2bsFqQe5%2bRiFsiB2Ob%2bbM573Rlr73vTfo4g1a99LYKo%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        title: "Beyond the Stars",
        author: "Emily Roberts",
        genre: "Science Fiction",
        price: 9.99,
        imageUrl: "https://th.bing.com/th/id/R.6b54ac30b6763a0ecd7c69456cbcf237?rik=tJ%2fKUEI29a0Atw&riu=http%3a%2f%2fwww.wickedgoodbookcovers.com%2fwp-content%2fuploads%2f2018%2f02%2fBeyond-the-Stars.jpg&ehk=8yl3vI5TgS9%2fnf6TBS7D25%2fnKUIwNYJ3J4L5bp8w6Kw%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        title: "The Art of War",
        author: "Michael Johnson",
        genre: "Non-Fiction/Military",
        price: 14.99,
        imageUrl: "https://images.thenile.io/r1000/9781626860605.jpg"
      },
      {
        title: "The Secret Garden",
        author: "Sarah Thompson",
        genre: "Children's Fiction",
        price: 7.99,
        imageUrl: "https://www.workingmomsagainstguilt.com/wp-content/uploads/2007/04/the-secret-garden.jpg"
      },
      {
        title: "Inferno",
        author: "Robert Johnson",
        genre: "Fantasy",
        price: 10.99,
        imageUrl: "https://th.bing.com/th/id/OIP.XhApnvZ5-8GXY_mnFtK8cgAAAA?pid=ImgDet&rs=1"
      },
      {
        title: "The Power of Now",
        author: "Jennifer Adams",
        genre: "Self-Help/Spirituality",
        price: 11.99,
        imageUrl: "https://th.bing.com/th/id/OIP.aNQtC2BHv7Ti784eEdDk1wHaK6?pid=ImgDet&rs=1"
      }
      
    ]

    

    const ctx=useContext(CartContext)
        
    const AddCart=(ItemName)=>{
      const newCartItem=productsArr.find((item)=>item.title===ItemName)
      ctx.addToCart(newCartItem)
    //   fetch('https://ecommerce2-6ebd1-default-rtdb.firebaseio.com/CartUser.json',{
    //     method : 'POST',
    //     body : JSON.stringify(newCartItem),
    //     headers:{
    //       'Content-body' : 'application/json'
    //     }
    //   }).then((res)=>{
    //     if(res.ok){
    //       console.log('cart added')
    //     }
    //   })
    }


    return(
        <>
        <div className={classes.ProductsScreen}>
        <p className={classes.heading}>Books</p>
        <div className={classes.MusicProducts}>
          {productsArr.map((product, index) => (
            <button className={classes.cardBtn}>
              <div key={index} className={classes.product}>
              <Link to={`/product-details/${product.title}`} >
                <img src={product.imageUrl} alt={product.title} style={{ width: '200px',height:'300px'}} />
                <p className={classes.productTitle}>{product.title}</p>
              </Link>
                <div className={classes.Price}>
                  <h4>${product.price}</h4>
                  <Button className='responsive-button' variant='primary' onClick={()=>AddCart(product.title)}>Add to Cart</Button>
                </div>
              </div> 
            </button>
          ))}
        </div>
        </div>
        </>
    )
}

export default ProductsOnScreen