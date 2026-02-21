import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; 
import search_icon from '../../assets/search_icon.png';
import basket_icon from '../../assets/basket_icon.png';
// import profile_icon from './profile_icon.png';
// import profile_icon from './profile_icon.png'
import profile_icon from '../../assets/profile_icon.png';
import bag_icon from '../../assets/bag_icon.png';
import logout_icon from '../../assets/logout_icon.png';
import  {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
// import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {

    const[menu,setmenu]=useState("menu");
    const{getTotalCartAmount,token,setToken}=useContext(StoreContext)
    const navigate=useNavigate()
    const logout=()=>{
      localStorage.removeItem("token");
      setToken("")
      navigate("/")
    }
  return (
    <div className='Navbar'>
      <Link to='/'><img src={logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download'onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
        :<div className='navbar-profile'>
          <img src={profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={bag_icon} alt="" /><p>Orders</p></li>
            {/* console.log("Profile Icon Path:", assets.profile_icon);  */}

            <hr/>
            <li onClick={logout}><img src={logout_icon} alt="" /><p>Logout</p></li>
          </ul>
          
          </div>

        
        
        }
        
      </div>
    </div>
  );
};

export default Navbar;
