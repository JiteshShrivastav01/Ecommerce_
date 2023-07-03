import React, { useContext, useState } from 'react';
import { Button,Navbar } from 'react-bootstrap';
import { GiHamburgerMenu} from 'react-icons/gi';
import classes from './MainNavbar.module.css';
import CartContext from '../Context/CartContext';


const MainNavbar = (props) => {
  const [showMenuList,setShowMenuList]=useState(false)
  const ctx=useContext(CartContext)

  return (
    <div className={classes.navbar}>
      <div className={classes['logo-name']}>
        <Navbar.Brand style={{fontSize: '1.6rem',fontWeight:'bold'}} href="#home">MovieShow</Navbar.Brand>
      </div>
      <div className={showMenuList ? classes['mobile-menu-list'] : classes['menu-list']}>
        <li className={classes.list}><a href="#home">Home</a></li>
        <li className={classes.list}><a href="#store">Store</a></li>
        <li className={classes.list}><a href="#about">About</a></li>
      </div>
      <div className={classes.btn}>
        <div className={classes['cart-button']}>
          <Button variant="primary" onClick={props.onShow} style={{display: 'flex',alignItems: 'center',justifyContent: 'center',gap: '0.5rem'}}>
            <span>Add Cart</span>
            <span className={classes.cartCircle}>{ctx.cart.length}</span>
          </Button>
        </div>
        <button className={classes.toggleMenu} onClick={()=>setShowMenuList(!showMenuList)}>
          <GiHamburgerMenu/>
        </button>
      </div>
    </div>
  );
};

export default MainNavbar;