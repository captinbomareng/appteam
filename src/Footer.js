import React from 'react';
import Button from './Button.js';
import './Footer.css';
import { Link } from 'react-router-dom';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin,  FaMagento} from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subheading'>
                    Join our exclusive membership to
                    receive the latest news and trends
                </p>
                <p className='footer-subtext'>
                    You can unsubsribe at any time
                </p>
                <div className='form'>
                    <input name='email' type='email' placeholder='your email' className='form-input'/>
                        <Button fontSig='font-big' content='Suscribe' />
                </div>
            </section>
            <div className='footer-links-container'>
                 <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                    <ul className='footer-links-table'>
                        <li>
                        <h2 className='footer-link-title'>
                            About us
                        </h2>     
                        </li>                 
                        <li className='footer-link'><Link to='/sign-up' className='footer-link'>How it works</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Testimonials</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Careers</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Investors</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Term of service</Link></li>
                    </ul>
                    </div>
                    <div className='footer-links-items'>
                    <ul className='footer-links-table'>
                        <li>
                        <h2 className='footer-link-title'>
                            Conent us
                        </h2>     
                        </li>                 
                        <li className='footer-link'><Link to='/sign-up' className='footer-link'>Contact</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Support</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Destinations</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>sponsorships</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                    <ul className='footer-links-table'>
                        <li>
                        <h2 className='footer-link-title'>
                           Videos
                        </h2>     
                        </li>                 
                        <li className='footer-link'> <Link to='/sign-up' className='footer-link'>Submit Video</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Ambassadors</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Agency</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Influencer</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Our Viddeos</Link></li>                       
                        </ul>
                    </div>
                    <div className='footer-links-items'>
                    <ul className='footer-links-table'>
                        <li>
                        <h2 className='footer-link-title'>
                            Social media
                        </h2>     
                        </li>                 
                        <li className='footer-link'><Link to='/sign-up' className='footer-link'>Instagram</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Facebook</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Youtube</Link></li>
                        <li className='footer-link'><Link to='/' className='footer-link'>Twitter</Link></li>               
                        </ul>
                    </div>
                 </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <Link className='social-logo' to='/'>
                        <FaMagento/>
                        COOK 
                    </Link>
                    <div className='social-icons'>
                        <a className='social-icon-link' href='/' target="_blank" aria-label="Facebook" >
                            <FaFacebook/>
                        </a>
                        <a className='social-icon-link' href='/' target="_blank" aria-label="Instagram" >
                            <FaInstagram/>
                        </a>
                        <a className='social-icon-link' href='/' target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube/>
                        </a>
                        <a className='social-icon-link' href='/' target="_blank" aria-label="Twitter" >
                            <FaTwitter/>
                        </a>
                        <a className='social-icon-link' href='/' target="_blank" aria-label="Linkedin" >
                            <FaLinkedin/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
