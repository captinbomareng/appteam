import React from 'react';
import './InfoSection.css';
import './App.css'
import { Link } from 'react-router-dom';
import Button from './Button.js';

function InfoSection(props) {

    const {lightBg, imgposition,lightTopLine,lightText,topLine,headLine, lightTextDesc,description,buttonLable, img, alt, start,color, borderRadius,boolButton}=props;

    return (
        <>
            <div className={'info-sec ' + lightBg}>
                <div className='container'>
                    <div className={'info-row ' + imgposition}> 
                        <div className='info-column'>
                            <div className='text-wrapper'>
                                <div className={'top-line ' +lightTopLine}>{topLine}</div>
                                <h1 className={'heading '+ lightText}>{headLine}</h1>
                                <p className={'subtitle ' +lightTextDesc}>{description}</p>
                                {boolButton&&(
                                <Link to='/sign-up'>
                                    <Button size='big' fontSize='font-big' color={color} content={buttonLable} /> 
                                </Link>)}
                            </div>
                        </div>
                        <div className='info-column'>
                            <div className={'img-wrapper ' + start}>
                                <img src={img} alt={alt} className={borderRadius}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoSection
