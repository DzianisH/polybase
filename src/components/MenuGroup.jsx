import React from 'react';
import './MenuGroup.css';

class MenuGroup extends React.Component {
    renderChilder(){
        const children = this.props.group.children || [];
        return children.map((group, i) => {
            return <MenuGroup group={group} onGroupSelected={this.props.onGroupSelected} key={i}/>;
        });
    }

    render() {
        return (
        <div className="MenuGroup bordered" onClick={this.props.onGroupSelected.bind(null, this.props.group.id)}>
            <p>{this.props.group.name}</p>
            {
                this.renderChilder()
            }
        </div>);
    }
}

export default MenuGroup;