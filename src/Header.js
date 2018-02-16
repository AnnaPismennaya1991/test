import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = { color: 'black', fontSize: '20px' };
    }

    onMouseEnter = () => {
        this.setState({ fontSize: '25px' });
    }

    onMouseLeave = () => {
        this.setState({ fontSize: '20px' });
    }

    onClick = () => {
        this.setState({ color: 'red' });
    }



    render() {
        return (
            <div className="header"
                style={{ ...this.state, transition:'0.3s' }}
                //onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                onClick={this.onClick}>
            </div>
        );
    }
}

export default Header;
