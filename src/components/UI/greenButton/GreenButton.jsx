import React from 'react';
import m from './greenButton.module.scss';

const GreenButton = (props) => {
    return (
        <button className={`${m.greenButton} ${props.className}`} onClick={props.onClick}>{props.children}</button>
    )
}

export default GreenButton;