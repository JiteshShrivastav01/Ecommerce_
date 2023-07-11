import React from 'react';
import { FaYoutube, FaSpotify, FaInstagram } from 'react-icons/fa';
import classes from './MainFooter.module.css'

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.leftSection}>
        <p className={classes.name}>TheOneBook</p>
      </div>
      <div className={classes.rightSection}>
        <FaYoutube color="#FF0000" size={32} className={classes.icon} />
        <FaSpotify color="#000" size={32} className={classes.icon} />
        <FaInstagram color="#C13584" size={32} className={classes.icon} />
      </div>
    </footer>
  );
};



export default MainFooter;