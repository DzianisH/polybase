import React from 'react';
import './DefaultPanel.css'
import './ShowDBPanel.css'

export default class ShowDBPanel extends React.Component {

    renderOpenSource(db) {
        if(db.openSource) {
            return (
                <div className='ShowDBPanel-opensource display-flex'>
                    <i className="material-icons" style={{color: 'green'}}>done</i>
                    <p>OpenSource</p>
                </div>
            );
        } else {
            return (
                <div className='ShowDBPanel-opensource display-flex'>
                    <i className="material-icons ShowDBPanel-no" style={{color: 'red'}}>cancel</i>
                    <p style={{textDecoration: 'line-through'}}>OpenSource</p>
                </div>
            );
        }
    }

    renderFeatures(db) {

        for(const feature of db.features) {
            
        }
    }
    
    render() {
        const db = this.props.db;
        return (
            <div className='DefaultPanel bordered'>
                <h2 className='ShowNodePanel-title'>{db.fullName}</h2>
                <p className="ShowNodePanel-summary">{db.summary}</p>
                <div className='display-flex ShowDBPanel-block'>
                    <div className='ShowDBPanel-links display-flex'>
                        <a href={db.docs}>Tech docs</a>
                    </div>
                    <div className='ShowDBPanel-links display-flex'>
                        <a href={db.website}>Website</a>
                    </div>
                    {this.renderOpenSource(db)}
                </div>
                <div className='display-flex ShowDBPanel-block'>
                    <div className='ShowDBPanel-keynote display-flex'>
                        <p className='ShowDBPanel-keynote-name'>License:</p>
                        <p className='ShowDBPanel-keynote-value ShowDBPanel-hightlighted'>{db.license}</p>
                    </div>
                    <div className='ShowDBPanel-keynote display-flex'>
                        <p className='ShowDBPanel-keynote-name'>Data model:</p>
                        <p className='ShowDBPanel-keynote-value ShowDBPanel-hightlighted'>{db.dataModel}</p>
                    </div>
                    <div className='ShowDBPanel-keynote display-flex'>
                        <p className='ShowDBPanel-keynote-name'>CAP vertex:</p>
                        <p className='ShowDBPanel-keynote-value ShowDBPanel-hightlighted'>{db.cap}</p>
                    </div>
                    <div className='ShowDBPanel-keynote display-flex'>
                        <p className='ShowDBPanel-keynote-name'>Data persistance algorithm:</p>
                        <p className='ShowDBPanel-keynote-value ShowDBPanel-hightlighted'>{db.persistanceType}</p>
                    </div>
                </div>
                <div className='ShowDBPanel-block'>
                    <p><span className='ShowDBPanel-hightlighted'>Secondaty data model:</span> {db.secondaryDataModel}</p>
                    <p><span className='ShowDBPanel-hightlighted'>Partitionin Method(s):</span> {db.partitioninMethod}</p>
                    <p><span className='ShowDBPanel-hightlighted'>Replication Method(s):</span> {db.replicationMethod}</p>
                </div>
                <div className='ShowDBPanel-block'>
                    <p>Features: {db.features.map((feat, i)=> <span key={i} className='ShowDBPanel-feature'>{feat}</span>)}</p>
                </div>
                <div className='ShowDBPanel-block'>
                    <p>{db.description}</p>
                </div>
            </div>
        );
    }
}
