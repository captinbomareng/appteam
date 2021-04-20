import React from 'react';
import InfoSection from './InfoSection.js';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data.js';
import Pricing from './Pricing.js';

function Home() {
    return (
        <>
             <InfoSection {...homeObjTwo}/>
             <InfoSection {...homeObjOne}/>                     
             <InfoSection {...homeObjFour}/>
             <Pricing/> 
        </>
    )
}

export default Home
