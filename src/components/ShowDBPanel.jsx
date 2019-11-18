import React from 'react';
import './DefaultPanel.css'

export default props => {
    const db = props.db;
    return (
        <div className='DefaultPanel bordered'>
            <h2 className='ShowNodePanel-title'>{db.fullName}</h2>
            <p>License: {db.license}</p>
            <p>Data model: {db.dataModel}</p>
            <p>Data persistance algorithm: {db.persistanceType}</p>
            <p>CAP vertex: {db.cap}</p>
            <p>{db.description}</p>
        </div>
    );
}
