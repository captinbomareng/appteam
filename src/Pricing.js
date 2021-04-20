import React from 'react';
import './Pricing.css';
import { Link } from 'react-router-dom';
import {GiRock, GiCutDiamond,GiGoldBar} from 'react-icons/gi';
import Button from './Button.js';
import {IconContext} from 'react-icons/lib';

function Pricing() {
    return (
        <IconContext.Provider value={{color:'#a9b3c1', size: 64}}>
        <div className='pricing-section'>
            <div className='pricing-wrapper'>
                <h1 className='pricing-heading'>Our Services</h1>
                <div className='pricing-container'>
                    <Link className='pricing-card' to='/sign-up'>
                        <div className='pricing-card-info'>
                            <div className='pricing-card-icon'>
                                <GiRock />
                            </div>
                            <h3 className='pricing-card-plan'> Starter Pack</h3>
                            <h4 className='pricing-card-cost'> 99.99$</h4>
                            <p className='pricing-card-length'>per mounth</p>
                            <ul className='pricing-card-features'>
                                <p className='pricing-card-feature'> A single or one page website that only contains one HTML page. There are no additional pages.</p>    
                            </ul>
                            <Button color='primary' content='Choose Plan'/>
                        </div>
                    </Link>
                    <Link className='pricing-card' to='/sign-up'>
                        <div className='pricing-card-info'>
                            <div className='pricing-card-icon'>
                                <GiGoldBar />
                            </div>
                            <h3 className='pricing-card-plan'> Gold Rush</h3>
                            <h4 className='pricing-card-cost'> 299.99$</h4>
                            <p className='pricing-card-length'>per mounth</p>
                            <ul className='pricing-card-features'>
                                <p className='pricing-card-feature'> Includes a 3 page WordPress responsive website with primary navigation to include these pages</p>                               
                            </ul>
                            <Button color='primary' content='Choose Plan'/>
                        </div>
                    </Link>
                    <Link className='pricing-card' to='/sign-up'>
                        <div className='pricing-card-info'>
                            <div className='pricing-card-icon'>
                                <GiCutDiamond/>
                            </div>
                            <h3 className='pricing-card-plan'> Diamond Kings</h3>
                            <h4 className='pricing-card-cost'> 999.99$</h4>
                            <p className='pricing-card-length'>per mounth</p>
                            <ul className='pricing-card-features'>
                            <p className='pricing-card-feature'> A multi-page website contains multiple pages and subpages within a menu,such as an About, Features or Contact Us page.</p>
                            </ul>
                            <Button color='primary' content='Choose Plan'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing;
