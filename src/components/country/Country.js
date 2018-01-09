import React, { Component } from 'react';
import countries from './countries';

class Country extends Component {
    state = { items:[], name:'', population:'' };

    componentWillMount() {
        this.setState({items: countries});
    }

    onNameChange = (event) => {
        this.setState ({name: event.target.value })
    }

    onPopulationChange = (event) => {
        this.setState ({population: event.target.value})
    }

    push = () => {
        const country = {name:this.state.name, population:this.state.population}
        const items = this.state.items
        items.push(country)
        this.setState({items:items});
    }
    unshift = () => {
        const country = {name:this.state.name, population:this.state.population}
        const items = this.state.items
        items.unshift(country)
        this.setState({items:items});
    }

    renderItems = () => {
        return this.state.items.map ( (country, index) => {
            return(
                <div key={index} >
                    {`Country ${country.name}, ${country.population} 000 000`}
                </div>
            );
        });
    }
// Disabled - проверка
    isDisabled = () => {
        return this.state.name && this.state.population ? '' : 'disable';
    }

    render() {
        return(
            <div>
                <h2> Countries: </h2>
                <input placeholder='Name' type='text' onChange={this.onNameChange} />
                <input placeholder='Population' type='number' onChange={this.onPopulationChange} />
                <button onClick={this.push} disabled={this.isDisabled()}> Push </button>
                <button onClick={this.unshift} disabled={this.isDisabled()}> Unshift </button>
                {this.renderItems()}
            </div>
        );
    }
}

export default Country;
