import React from 'react';
import {connect} from 'react-redux';
import MenuNode from '../components/MenuNode';

import './Menu.css';

class Menu extends React.Component {
    render() {
        const nodes = this.props.nodes;
        if(nodes) {
            return (
                <div className="Menu">
                    {
                        nodes.map((node, i) => {
                            return (<MenuNode node={node} key={i}/>);
                        })
                    }
                </div>
            );
        }
    }
}


const mapStateToProps = state => {
    return {
        nodes: state.nodes
    }
}

export default connect(mapStateToProps)(Menu);