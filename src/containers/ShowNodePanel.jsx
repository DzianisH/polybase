import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {default as ShowNodePanelComponent} from '../components/ShowNodePanel';
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

        if(this.props.node) {
            return <ShowNodePanelComponent node={this.props.node}/>
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