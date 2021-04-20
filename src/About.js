import React from 'react'
import InfoSection from './InfoSection.js';
import {homeObjOne} from './Data.js';

function About() {
    return (
        <div>
            <InfoSection {...homeObjOne}/>  
        </div>
    )
}

export default About
