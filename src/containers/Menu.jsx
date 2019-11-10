import React from 'react';
import {connect} from 'react-redux';
import MenuGroup from './MenuGroup';

import './Menu.css';

class Menu extends React.Component {
    render() {
        const groups = this.props.groups;
        if(groups) {
            return (
                <div className="Menu">
                    {
                        groups.map((group, i) => {
                            return (<MenuGroup group={{...group}} key={i}/>);
                        })
                    }
                </div>
            );
        }
    }
}


const mapStateToProps = state => {
    return {
        groups: state.groups
    }
}

export default connect(mapStateToProps)(Menu);