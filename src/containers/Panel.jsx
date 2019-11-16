import React from 'react';
import {connect} from 'react-redux';
import DefaultPanel from '../components/DefaultPanel';
import ShowDBPanel from '../components/ShowDBPanel';


const panel = props => {
    if(props.group) {
        return <ShowDBPanel group={props.group}/>;
    } else {
        return <DefaultPanel/>;
    }
};

const mapStateToProps = state => {
    return {
        group: state.selectedGroup
    }
}

export default connect(mapStateToProps)(panel);
