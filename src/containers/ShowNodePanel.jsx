import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ShowGroupPanel from '../components/ShowGroupPanel';
import ShowDBPanel from '../components/ShowDBPanel';
import {selectGroupByName} from '../actions/db';
import LoadingPane from '../components/LoadingPane';

class ShowNodePanel extends React.Component {
    dispatchIfRequired() {
        const node = this.props.node;
        const urlName = this.props.match.params.nodeName;

        if(!node || urlName !== node.name) {
            this.props.dispatch(selectGroupByName(urlName));
        }
    }
    
    render() {
        this.dispatchIfRequired();

        const node = this.props.node;
        if(node) {
            return node.database 
                ? <ShowDBPanel db={node}/>
                : <ShowGroupPanel group={node}/>
        } else {
            return <LoadingPane/>;
        }
    }
}


const mapStateToProps = state => {
    return {
        node: state.selectedNode
    }
}

export default connect(mapStateToProps)(withRouter(ShowNodePanel));