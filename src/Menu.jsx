import React from 'react';
import MenuNode from './MenuNode';

import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        // mockup
        this.state = {
            nodes: [
                {
                    name: 'name 1',
                    children: [
                        {
                            name: 'name 1.1'
                        },
                        {
                            name: 'name 1.2'
                        }
                    ]
                },
                {
                    name: 'name 2',
                    children: [
                        {
                            name: 'name 2.1'
                        }
                    ]
                },
                {
                    name: 'name 3',
                    children: [
                        {
                            name: 'name 3.1'
                        },
                        {
                            name: 'name 3.2',
                            children: [
                                {
                                    name: 'name name 3.2.1'
                                },
                                {
                                    name: 'name name 3.2.2'
                                }
                            ]
                        },
                        {
                            name: 'name 3.3',
                            children: [
                                {
                                    name: 'name 3.3.1'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div className="Menu">
                {
                    this.state.nodes.map((node, i) => {
                        return (<MenuNode name={node.name} children={node.children} key={i}></MenuNode>);
                    })
                }
            </div>
        );
    }
}

export default Menu;