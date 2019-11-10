import React from 'react';
import './MenuGroup.css';

class MenuGroup extends React.Component {
    renderChilder(){
        const children = this.props.group.children;
        if(children) {
            return children.map((group, i) => {
                return <MenuGroup group={group} key={i}/>;
            });
        } else {
            return;
        }
    }

    render() {
        return (
        <div className="MenuGroup bordered">
            <p>{this.props.group.name}</p>
            {
                this.renderChilder()
            }
        </div>);
    }
}

export default MenuGroup;