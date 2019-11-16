import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuNode.css';

class MenuNode extends React.Component {
    renderChilder(){
        const children = this.props.node.children || [];
        return children.map((node, i) => {
            return <MenuNode node={node} key={i}/>;
        });
    }

    render() {
        return (
        <div className="MenuNode bordered">
            <NavLink to={`/db/${this.props.node.name}`}>{this.props.node.name}</NavLink>
            {
                this.renderChilder()
            }
        </div>);
    }
}

export default MenuNode;