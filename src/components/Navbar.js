import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import { AiOutlineMenu } from "react-icons/ai";

import './Navbar.css';
function Navbar(){


const [click,setClick]=useState(false);
const handleClick=()=>setClick(!click);
const closeMobileMenu=()=> setClick(false);
const [button,setButton]=useState(true);
const showButton=()=> {

    if(window.innerWidth<=960){

        setButton(false)
    }
    else{
        setButton(true)
    }
};

window.addEventListener('resize',showButton);




    return (

       
            <>
            <nav className="navbar">

                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                     <img src="image/logo.png"/>
                     </Link>
                     <div className="menu-icon" onClick={handleClick}>
                         <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    <AiOutlineMenu />
                     </div>
                     <ul className={click ? 'nav-menu active': 'nav-menu'}>

                         <li className='nav-item'>
                             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                              <h3>   Home</h3>
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/what we do' className='nav-links' onClick={closeMobileMenu}>
                                <h3> What we do</h3>
                             </Link>
                         </li>

                         <li className='nav-item'>
                             <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                                <h3> Blog</h3>
                             </Link>
                         </li>
                         
                        
                        
                         {/* <li className='nav-item'>
                             <Link to='/team' className='nav-links' onClick={closeMobileMenu}>
                               <h3>Team</h3>
                             </Link>
                         </li> */}

                         <li className='nav-item'>
                             <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                               <h3>Contact</h3>
                             </Link>
                         </li>
                     </ul>
                    
                  


                </div>
            </nav>
            </>


    
    );
}
export default Navbar;