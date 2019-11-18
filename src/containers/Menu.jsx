import React from 'react';
import {connect} from 'react-redux';
import {expandChildren, collapseChildren} from '../store/menu/actions'
import MenuNode from '../components/MenuNode';

import './Menu.css';

class Menu extends React.Component {
    callAction(action, id, e) {
        if(e) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.props.dispatch(action(id));
    }

    shouldExpandChildren(node, e) {
        return this.props.expand.includes(node.id);
    }

    isActive(node) {
        return node.id === this.props.selectedNode.id;
    }

    createUrl(node) {
        return `/db/${node.name}`;
    }

    render() {
        const nodes = this.props.nodes;
        console.log(this.props)
        if(nodes) {
            return (
                <div className="Menu">
                    {
                        nodes.map((node, i) => {
                            return (<MenuNode node={node} key={i}
                                onExpandChildren={this.callAction.bind(this, expandChildren)}
                                onCollapseChildren={this.callAction.bind(this, collapseChildren)}
                                shouldExpandChildren={this.shouldExpandChildren.bind(this)}
                                isActive={this.isActive.bind(this)}
                                createUrl={this.createUrl.bind(this)}
                                />);
                        })
                    }
                </div>
            );
        }
    }
}


const mapStateToProps = state => {
    return {
        nodes: state.db.nodes,
        selectedNode: state.db.selectedNode,
        expand: state.menu.expand
    }
}

export default connect(mapStateToProps)(Menu);