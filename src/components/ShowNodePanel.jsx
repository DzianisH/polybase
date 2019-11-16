import React from 'react';
import './DefaultPanel.css'

export default props => {
    const node = props.node;
    return (
        <div className='DefaultPanel bordered'>
            <p>Full name: {node.fullName}</p>
            <p>License: {node.license}</p>
            <p>Data model: {node.dataModel}</p>
            <p>Data persistance algorithm: {node.persistanceType}</p>
            <p>CAP vertex: {node.cap}</p>
            <p>{node.description}</p>
        </div>
    );
}
