import React, { useState } from 'react';
import './Navbar.css';
import images from '../../constants/images';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="Gericth" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">home</a></li>
        <li className="p__opensans"><a href="#about">about</a></li>
        <li className="p__opensans"><a href="#menu">menu</a></li>
        <li className="p__opensans"><a href="#awards">awards</a></li>
        <li className="p__opensans"><a href="#contact">contact</a></li>
      </ul>
      <div className="app__navbar-login p__opensans">
        <a href="#login">Login / Registration</a>
        <div />
        <a href="/">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
        {
          toggleMenu &&(
            <div className="app__navbar-smallscreen_overlay slide-bottom">
              <MdOutlineRestaurantMenu size={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans"><a href="#home">home</a></li>
                <li className="p__opensans"><a href="#about">about</a></li>
                <li className="p__opensans"><a href="#menu">menu</a></li>
                <li className="p__opensans"><a href="#awards">awards</a></li>
                <li className="p__opensans"><a href="#contact">contact</a></li>
              </ul>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar