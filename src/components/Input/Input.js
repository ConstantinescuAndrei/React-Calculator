import React from 'react'

import './Input.css'

const Input = ({value}) => {
    return (
        <div className={'input-label'}>
            <p className={'label'}>{value}</p>
        </div>        
    );
}

export default Input