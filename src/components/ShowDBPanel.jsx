import React from 'react';
import './DefaultPanel.css'

export default props => {
    return (
        <div className='DefaultPanel bordered'>I'm Panel to show {props.group.name}</div>
    );
}
