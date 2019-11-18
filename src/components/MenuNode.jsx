import React from 'react';
import {NavLink} from 'react-router-dom';
import 'material-design-icons';
import './MenuNode.css';

class MenuNode extends React.Component {
    shouldIExpand() {
        return this.props.shouldExpandChildren(this.props.node)
    }

    renderSign() {
        if(this.props.node.children) {
            if(this.shouldIExpand()) {
                return <i className="material-icons MenuNode-sing expandable"
                onClick={this.props.onCollapseChildren.bind(null, this.props.node.id)}>remove</i>;
            } else {
                return <i className="material-icons MenuNode-sing expandable"
                onClick={this.props.onExpandChildren.bind(null, this.props.node.id)}>add</i>;
            }
        }
    }

    renderChilder(){
        const parentNode = this.props.node;
        const children = parentNode.children || [];
        return children.map((node, i) => {
            return <MenuNode node={node} hidden={!this.shouldIExpand()} key={i}
                onExpandChildren={this.props.onExpandChildren}
                onCollapseChildren={this.props.onCollapseChildren}
                shouldExpandChildren={this.props.shouldExpandChildren}
                />;
        });
    }

    render() {
        if(this.props.hidden){
            return <div/>;
        }
        
        return (
        <div className='MenuNode'>
            <NavLink to={`/db/${this.props.node.name}`} activeclassname="MenuNode-active-link">{this.props.node.name}</NavLink>
            {
                this.renderSign()
            }
            {
                this.renderChilder()
            }
        </div>);
    }
}

export default MenuNode;