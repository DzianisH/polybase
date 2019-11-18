import React from 'react';
import {Link} from 'react-router-dom';
import './DefaultPanel.css'
import './ShowNodePanel.css'

class ShowGroupPanel extends React.Component {
    renderChildrenLinks(children) {
        if(!children) {
            return <div>No particular implementations yet.</div>;
        }
        return (
            <div>
                <span>Implementations:</span>
                {
                    children.map((child, i) => {
                        return <Link to={`/db/${child.name}`} key={i}>{child.fullName}</Link>;
                    })
                }
            </div>
        )
    }

    render() {
        const group = this.props.group;
        return (
            <div className='DefaultPanel bordered'>
                <h2>{group.fullName}</h2>
                <p>{group.summary}</p>
                {this.renderChildrenLinks(group.children)}
                <p>{group.description}</p>
            </div>
        );
    }
}


export default ShowGroupPanel;