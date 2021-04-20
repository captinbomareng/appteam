import React from 'react';
import './Button.css';

function Button(props) {

    const {color, size, fontSize, content}=props;

    return (
        <button className={'btn '+color+ ' ' + size+ ' '+ fontSize}>
            {content}
        </button>
    )
}

export default Button;
