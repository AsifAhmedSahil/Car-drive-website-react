import React, { useState } from 'react'
import styleModule from "./Navbar.module.css"
import "../../index.css"
import {AiOutlineMenu , AiOutlineClose, AiOutlineSearch , AiOutlineUser} from 'react-icons/ai'

import logo from "../../images/logo.png"


const Navbar = () => {

    const [nav, setNav] = useState(false)


  return (
    <header className={styleModule.navbar}>
        <img src={logo} alt="/" />

        <nav>
            <ul className={ nav ? [styleModule.menu ,styleModule.active].join(" ") : [styleModule.menu]}>
                <li><a href="/">Learn More</a></li>
                <li><a href="/">Log in</a></li>
                <li><a href="/">Sign Up</a></li>
                <li>
                    <AiOutlineSearch size={25} className="icons"/>
                </li>
                <li>
                    <AiOutlineUser size={25} className="icons"/>
                </li>
            </ul>
        </nav>

        <div onClick={()=>{ setNav(!nav)}} className={styleModule.mobile_btn}>
            {
                nav ? <AiOutlineClose size={25}/> :  <AiOutlineMenu size={25}/>
            }
        </div>

    </header>
  )
}

export default Navbar