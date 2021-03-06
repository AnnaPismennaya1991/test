import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState({value: value});
    }

    render() {
        return (
            <div className='search'>
                <input onChange={this.onChange}/>
                <div className='text'>{this.state.value}</div>
            </div>
        );
    }
}

export default Search;
