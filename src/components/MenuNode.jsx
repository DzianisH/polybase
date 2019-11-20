import React from 'react';
import {Link} from 'react-router-dom';
import './MenuNode.css';

class MenuNode extends React.Component {
    shouldIExpand() {
        return this.props.shouldExpandChildren(this.props.node)
    }

    renderSign() {
        if(this.props.node.children) {
            if(this.shouldIExpand()) {
                return <i className="material-icons MenuNode-sing"
                onClick={this.props.onCollapseChildren.bind(null, this.props.node.id)}>arrow_drop_down</i>;
            } else {
                return <i className="material-icons MenuNode-sing"
                onClick={this.props.onExpandChildren.bind(null, this.props.node.id)}>arrow_right</i>;
            }
        }
        return <i className='MenuNode-circle'/>
    }

    renderChilder(){
        const parentNode = this.props.node;
        const children = parentNode.children || [];
        return children.map((node, i) => {
            return <MenuNode node={node} hidden={!this.shouldIExpand()} key={i}
                onExpandChildren={this.props.onExpandChildren}
                onCollapseChildren={this.props.onCollapseChildren}
                shouldExpandChildren={this.props.shouldExpandChildren}
                isActive={this.props.isActive}
                createUrl={this.props.createUrl}
                />;
        });
    }


    getStyles() {
        return this.props.isActive(this.props.node)
            ? 'MenuNode bordered MenuNode-active'
            : 'MenuNode bordered';
    }

    render() {
        if(this.props.hidden){
            return <div/>;
        }
        
        return (
        <div className={this.getStyles()}>
            {
                this.renderSign()
            }
            <Link to={this.props.createUrl(this.props.node)} className="MenuNode-link">{this.props.node.name}</Link>
            {
                this.renderChilder()
            }
        </div>);
    }
}

export default MenuNode;