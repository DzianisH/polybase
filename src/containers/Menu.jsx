import React from 'react';
import {connect} from 'react-redux';
import MenuGroup from '../components/MenuGroup';
import {selectGroup} from '../actions/db';

import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.onGroupSelected = this.onGroupSelected.bind(this);
    }

    onGroupSelected(groupId, event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.dispatch(selectGroup(groupId));
        return false;
    }

    render() {
        const groups = this.props.groups;
        if(groups) {
            return (
                <div className="Menu">
                    {
                        groups.map((group, i) => {
                            return (<MenuGroup group={group} onGroupSelected={this.onGroupSelected.bind(this)} key={i}/>);
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