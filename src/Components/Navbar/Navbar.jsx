import React from 'react'
import './Navbar.css'
import underline from '../../assets/Things/nav_underline.svg'
import { useState,useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/Things/menu_open.svg'
import menu_close from '../../assets/Things/menu_close.svg'
import theme_pattern from '../../assets/Things/theme_pattern.svg'

const Navbar = () => {
  const [menu,setMenu] = useState('home');
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = '0';
  }
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  }
  return (
    <div className='navbar'>
      <div className='text-overlay'>
        <h2>Lakshya</h2>
        <img src={theme_pattern} alt=''/>
      </div>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==='about'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>My Work</p></AnchorLink>{menu==='services'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Connect With Me</p></AnchorLink>{menu==='contact'?<img src={underline} alt=''/>:<></>}</div>
    </div>
  )
}

export default Navbar
