import classes from './HomeContent.module.css'
import { Link } from 'react-router-dom'
import {AiFillPlayCircle} from 'react-icons/ai'




const HomeContent=()=>{
    const Arr=[
      {date: 'JUL 16' , city : 'DETROIT, MI' ,location :'DTE ENERGY MUSIC THEATRE'},
      {date: 'JUL 19' , city : 'TORONTO,ON ' ,location :'BUDWEISER STAGE'},
      {date: 'JUL 22' , city : 'BRISTOW, VA' ,location :'JIGGY LUBE LIVE'},
      {date: 'JUL 29' , city : 'PHOENIX, AZ' ,location :'AK-CHIN PAVILION'},
      {date: 'AUG 2'  , city : 'LAS VEGAS, NV' ,location :'T-MOBILE ARENA'},
      {date: 'JUL 19' , city : 'CONCORD, CA' ,location :'CONCORD PAVILION'},
    ]
    return(
        <>
          <header className={classes.header}>
            <p className={classes.header1}>The Generics</p>
            <p className={classes.header2}>Get out Latest Action</p>
            <Link to='/about'><img src="" alt="" />
                <AiFillPlayCircle size='50'  className={classes.playIcon}/>
            </Link>
          </header>
          <div className="container">
            <p className={classes.heading}>Tours</p>
            <div className={classes.list}>
              <table className={classes.table}>
                {Arr.map((list)=>(
                  <tr className={classes.tr}>
                    <td className={classes.td}>{list.date}</td>
                    <td className={classes.td}>{list.city}</td>
                    <td className={classes.td}>{list.city}</td>
                    <button className={classes.btn}>Buy Ticket</button>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </>
    )
}

export default HomeContent