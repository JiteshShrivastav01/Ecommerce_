import React, { useContext, useState } from 'react';
import { Button,Navbar } from 'react-bootstrap';
import { GiHamburgerMenu} from 'react-icons/gi';
import classes from './MainNavbar.module.css';
import CartContext from '../Context/CartContext';
import { NavLink } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';



const MainNavbar = (props) => {
  const [showMenuList,setShowMenuList]=useState(false)
  const ctx=useContext(CartContext)
  const ctx2=useContext(AuthContext)

  return (
    <div className={classes.navbar}>
      <div className={classes['logo-name']}>
        <Navbar.Brand className={classes.Brand} href="#home">TheGenerics</Navbar.Brand>
      </div>
      <div className={showMenuList ? classes['mobile-menu-list'] : classes['menu-list']}>
        <li className={classes.list}>
          <NavLink exact to="/" activeClassName={classes.active}>Home</NavLink>
        </li>
        {ctx2.isLoggedIn && <li className={classes.list}>
          <NavLink to="/store" activeClassName={classes.active}>Store</NavLink>
        </li>}
        {ctx2.isLoggedIn && <li className={classes.list}>
          <NavLink to="/about" activeClassName={classes.active}>About</NavLink>
        </li>}
        {ctx2.isLoggedIn && <li className={classes.list}>
          <NavLink to="/contactus" activeClassName={classes.active}>Contact US</NavLink>
        </li>}
      </div>
      <div className={classes.btn}>
        {ctx2.isLoggedIn && <div className={classes['cart-button']}>
          <Button variant="primary" onClick={props.onShow} className={classes.cart}>
            <span><FaShoppingCart/></span>
            <span className={classes.cartCircle}>{ctx.cart.length}</span>
          </Button>
        </div>}
        
        <div>
          {!ctx2.isLoggedIn && <li className={classes.list2}>
            <NavLink to="/login" className={classes.loginBtn}>Login</NavLink>
          </li>}
          {ctx2.isLoggedIn && <li className={classes.list2}>
            <NavLink to="/"  className={classes.loginBtn} onClick={ctx2.logout} exact>Logout</NavLink>
          </li>}
        </div>
        <button className={classes.toggleMenu} onClick={()=>setShowMenuList(!showMenuList)}>
          <GiHamburgerMenu/>
        </button>
      </div>
    </div>
  );
};

export default MainNavbar;