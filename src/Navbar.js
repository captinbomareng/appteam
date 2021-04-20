import React, {useState,useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaMagento,FaTimes,FaBars } from 'react-icons/fa';
import Button from './Button.js';
import { BsAppIndicator } from 'react-icons/bs';

function Navbar() {

    const [click, setClick]= useState(false);
    const [button,setButton]=useState(true);

    const hanadeClick = () =>{
        setClick(!click);
     }

    const closeMobileMenu =()=>{
        setClick(false);
     }

    const showButton = () =>{
        if(window.innerWidth>960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',showButton);

    return (
        <nav>  
            <Link to='/' className='nav-logo'>
              <BsAppIndicator/>
              AppTeam
            </Link>      
            <div className='navbar-container'>           
                <div onClick={hanadeClick} className='menu-icon'>
                    {click ? <FaTimes /> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-manu-active' :'nav-menu'}>
                    <li className='nav-item'>
                        <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                            home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/shop' className='nav-links' onClick={closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item-btn'>
                        {button ? (
                            <Link to='/sign-up' className='nav-btn-links'>
                                <Button color='primary' content='SIGN UP' />
                            </Link>
                        ):(
                            <Link to='/sign-up' className='nav-btn-links'>
                                <Button color='primary' fontSize='font-big' content='SIGN UP' />
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
