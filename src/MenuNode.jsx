import React from 'react';
import './MenuNode.css';

class MenuNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {node: {...props}};
    }

    renderChilder(){
        const children = this.state.node.children;
        if(children) {
            return this.state.node.children.map((node, i) => {
                return <MenuNode name={node.name} children={node.children} key={i}/>;
            });
        } else {
            return;
        }
    }

    render() {
        const children = this.state.node.children;
        return (
        <div className="MenuNode bordered">
            <p>{this.state.node.name}</p>
            {
                this.renderChilder()
            }
        </div>);
    }
}

export default MenuNode;