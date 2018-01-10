import React, { Component } from 'react';
import countries from './countries';

class Country extends Component {
    state = { items:[], name:'', population:'' };

    componentWillMount() {
        this.setState({items: countries});
    }

    onNameChange = (event) => {
        this.setState ({name: event.target.value });
    }

    onPopulationChange = (event) => {
        this.setState ({population: event.target.value});
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

    reverse = () => {
        const items = this.state.items
        items.reverse()
        this.setState({items:items})
    }

// joinCountries - страны в строке через запятую
    joinCountries = () => {
        const names = this.state.items.map ((country) => {
            return country.name;
        });
        return names.join(', ')
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
        const names = this.state.items.map ((country) => {
            return country.name;
        });
        const isContains = names.indexOf(this.state.name) != -1;

        return this.state.name && this.state.population && !isContains ? '' : 'disable';
    }

    render() {
        return(
            <div>
                <h2> Countries: </h2>
                <input placeholder='Name' type='text' onChange={this.onNameChange} />
                <input placeholder='Population' type='number' onChange={this.onPopulationChange} />
                <button onClick={this.push} disabled={this.isDisabled()}> Push </button>
                <button onClick={this.unshift} disabled={this.isDisabled()}> Unshift </button>
                <button onClick={this.reverse}> Reverse </button>
                <div>
                    {this.joinCountries()}
                </div>
                <div>
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}

export default Country;
