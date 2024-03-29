import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ShowGroupPanel from '../components/ShowGroupPanel';
import ShowDBPanel from '../components/ShowDBPanel';
import {selectGroupByName} from '../store/db/actions';
import NotFoundPane from '../components/NotFoundPane';

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
            return <NotFoundPane/>;
        }
    }
}


const mapStateToProps = state => {
    return {
        node: state.db.selectedNode
    }
}

export default connect(mapStateToProps)(withRouter(ShowNodePanel));