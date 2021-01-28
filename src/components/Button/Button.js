import React from 'react'
import './Button.css'

import './Button.css'

const Button = ({name, clicked}) => {

    return (
        <button className='grid-item' onClick={clicked}>{name}</button>
    );
}

export default Button