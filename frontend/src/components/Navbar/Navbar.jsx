import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; 
import search_icon from '../../assets/search_icon.png';
import basket_icon from '../../assets/basket_icon.png';


const Navbar = () => {

    const[menu,setmenu]=useState("menu");
  return (
    <div className='Navbar'>
      <img src={logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
