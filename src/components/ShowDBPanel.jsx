import React from 'react';
import './Panel.css';
import './ShowNodePanel.css';
import './ShowDBPanel.css';


export default class ShowDBPanel extends React.Component {

    renderTitileInfo(db) {
        return (
            <div className='ShowDBPanel-titleinfo'>
                <div className='display-flex ShowDBPanel-upperleftdata'>
                    <div className='vcenter'>
                        <a className='ShowNodePanel-link ShowDBPanel-link' style={{display: 'block'}} href={db.docs}
                            target='_blank' rel='noopener noreferrer'>Tech docs</a>
                        <a className='ShowNodePanel-link ShowDBPanel-link' style={{display: 'block'}} href={db.website}
                            target='_blank' rel='noopener noreferrer'>Website</a>
                    </div>
                    <div className='ShowDBPanel-opensource display-flex'>
                        {this.renderOpenSource(db)}
                    </div>
                </div>
                <p className='ShowNodePanel-summary'>
                    {db.summary}
                </p>
            </div>
        );
    }

    renderGenInfo(db) {
        return (
            <div>
                <p className='ShowDBPanel-geninfo-block Panel-paragraph'>
                    {db.name} is <span className='ShowDBPanel-txtfeat'>{db.dataModel}</span> database
                    with <span className='ShowDBPanel-txtfeat'>{db.transaction} transaction</span> model
                    and <span className='ShowDBPanel-txtfeat'>{db.consistency} consistency</span> principle for distributed
                    envs. {this.render2ndDataModel(db)}
                </p>
                <p className='ShowDBPanel-geninfo-block Panel-paragraph'>
                    {db.fullName} provides <code className='ShowDBPanel-txtfeat'>{db.partitionin} partitioning
                    </code>, <code className='ShowDBPanel-txtfeat'>{db.replication} replication</code> and it lays on <span
                    className='ShowDBPanel-txtfeat'>{db.cap} vertex</span> according to CAP theorem. Database comes
                    with <span className='ShowDBPanel-txtfeat'>{db.persistance} persistance</span> algorithm.
                </p>
                <p className='ShowDBPanel-geninfo-block Panel-paragraph'>
                    {db.openSource ? 'Open-Source' : 'Commertial'} software protects
                    by <span className='ShowDBPanel-txtfeat'>{db.license}</span> license(s).
                </p>
            </div>
        );
    }

    renderKeyFeats(db) {
        return (
            <p className='ShowNodePanel-visualbreak Panel-paragraph'>Key feaures: { db.features.join(', ') }.</p>
        );
    }

    render2ndDataModel(db) {
        if(db.secondaryDataModel) {
            return (<span>
                Additionally, it has <span className='ShowDBPanel-txtfeature'>{db.secondaryDataModel}</span> features.
            </span>);
        }
    }

    renderOpenSource(db) {
        if(db.openSource) {
            return (
                <p>
                    <i className="material-icons" style={{color: 'green'}}>done</i>
                    Open-Source
                </p>
            );
        } else {
            return (
                <p>
                    <i className="material-icons ShowDBPanel-no" style={{color: 'red'}}>cancel</i>
                    Proprietary
                </p>
            );
        }
    }
    
    render() {
        const db = this.props.db;
        return (
            <div className='Panel bordered'>
                <h2 className='Panel-title'>{db.fullName}</h2>
                { this.renderTitileInfo(db) }
                { this.renderGenInfo(db) }
                { this.renderKeyFeats(db) }
                <p className='Panel-paragraph'>Thus, {db.description}</p>
            </div>
        );
    }
}
