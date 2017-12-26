import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = { color: 'black' }
    }

    onClick = () => {
        this.setState({ color: 'green' });
    }

    render() {
        return (
            <div className="dropdown-component" style={this.state} onClick={this.onClick}>
                Dropdown-component!
            </div>
        );
    }
}

export default Dropdown;
