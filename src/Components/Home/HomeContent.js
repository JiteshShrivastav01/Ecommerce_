import classes from './HomeContent.module.css'
import { Link } from 'react-router-dom'
import {AiFillPlayCircle} from 'react-icons/ai'




const HomeContent=()=>{
    const Arr=[
      {name: 'Book 1', author : 'author 1' , price : '10$'},
      {name: 'Book 2', author : 'author 2' , price : '11$'},
      {name: 'Book 3', author : 'author 3' , price : '14$'},
      {name: 'Book 4', author : 'author 4' , price : '13$'},
      {name: 'Book 5', author : 'author 5' , price : '15$'},
      {name: 'Book 6', author : 'author 6' , price : '16$'},
    ]
    return(
        <>
          <header className={classes.header}>
            <p className={classes.header1}>The One Book</p>
            <p className={classes.header2}>Get out Latest Upcoming Book</p>
            <Link to='/about'><img src="" alt="" />
                <AiFillPlayCircle size='50'  className={classes.playIcon}/>
            </Link>
          </header>
          <div className="container">
            <p className={classes.heading}>UPCOMING BOOKS</p><br />
            <div className={classes.list}>
              <table className={classes.table}>
                <tr className={classes.tr}>
                  <th>Book Name </th>
                  <th>Author Name</th>
                  <th>Price</th>
                </tr>
                {Arr.map((list)=>(
                  <tr className={classes.tr}>
                    <td className={classes.td}>{list.name}</td>
                    <td className={classes.td}>{list.author}</td>
                    <td className={classes.td}>{list.price}</td>
                    <button className={classes.btn}>Pre-Book</button>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </>
    )
}

export default HomeContent