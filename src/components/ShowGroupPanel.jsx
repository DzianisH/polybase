import React from 'react';
import {Link} from 'react-router-dom';
import './Panel.css'
import './ShowNodePanel.css'
import './ShowGroupPanel.css'

class ShowGroupPanel extends React.Component {
    renderChildrenLinks(children) {
        if(!children) {
            return <div>No particular implementations yet.</div>;
        }
        return (
            <div className='Panel-paragraph ShowNodePanel-visualbreak'>
                <span>Implementations:</span>
                {
                    children.map((child, i) => {
                        return <Link to={`db/${child.name}`} key={i}
                            className='ShowNodePanel-link'>{child.fullName}</Link>;
                    })
                }
            </div>
        )
    }

    render() {
        const group = this.props.group;
        return (
            <div className='Panel bordered'>
                <h2 className='Panel-title'>{group.fullName}</h2>
                <p className='Panel-paragraph'>{group.summary}</p>
                {this.renderChildrenLinks(group.children)}
                <p className='Panel-paragraph'>{group.description}</p>
            </div>
        );
    }
}


export default ShowGroupPanel;