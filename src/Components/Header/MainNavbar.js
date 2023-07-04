import React, { useContext, useState } from 'react';
import { Button,Navbar } from 'react-bootstrap';
import { GiHamburgerMenu} from 'react-icons/gi';
import classes from './MainNavbar.module.css';
import CartContext from '../Context/CartContext';
import { NavLink } from 'react-router-dom';


const MainNavbar = (props) => {
  const [showMenuList,setShowMenuList]=useState(false)
  const ctx=useContext(CartContext)

  return (
    <div className={classes.navbar}>
      <div className={classes['logo-name']}>
        <Navbar.Brand style={{fontSize: '1.6rem',fontWeight:'bold'}} href="#home">TheGenerics</Navbar.Brand>
      </div>
      <div className={showMenuList ? classes['mobile-menu-list'] : classes['menu-list']}>
        <li className={classes.list}>
          <NavLink to="/" className={({isActive})=>isActive ? classes.active : undefined}end>Home</NavLink>
        </li>
        <li className={classes.list}>
          <NavLink to="/store" className={({isActive})=>isActive ? classes.active : undefined}>Store</NavLink>
        </li>
        <li className={classes.list}>
          <NavLink to="about" className={({isActive})=>isActive ? classes.active : undefined}>About</NavLink>
        </li>
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