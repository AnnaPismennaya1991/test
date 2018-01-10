import React, { Component } from 'react';
import cities from './cities';

class CitiesComponent extends Component {
    state = { items:[], name:'', country:'', yearOfFoundation:'', population:'', language:'', cinema:false, zoo:false};

    componentWillMount() {
        this.setState({items: cities});
    }

    onNameChange = (event) => {
        this.setState ({name: event.target.value });
    }

    onCountryChange = (event) => {
        this.setState ({country: event.target.value });
    }

    onYearOfFoundationChange = (event) => {
        this.setState ({yearOfFoundation: event.target.value });
    }

    onPopulationChange = (event) => {
        this.setState ({population: event.target.value});
    }

    onLanguageChange = (event) => {
        this.setState ({language: event.target.value});
    }

    onCinemaChange = (event) => {
        this.setState ({cinema: event.target.value});
    }

    onZooChange = (event) => {
        this.setState ({zoo: event.target.value});
    }

    push = () => {
        const citiesComponent = {
            name:this.state.name,
            country:this.state.country,
            yearOfFoundation:this.state.yearOfFoundation,
            population:this.state.population,
            language:this.state.language,
            cinema:this.state.cinema,
            zoo:this.state.zoo
        }
        const items = this.state.items
        items.push(citiesComponent)
        this.setState({items:items});
    }
    unshift = () => {
        const citiesComponent = {
            name:this.state.name,
            country:this.state.country,
            yearOfFoundation:this.state.yearOfFoundation,
            population:this.state.population,
            language:this.state.language,
            cinema:this.state.cinema,
            zoo:this.state.zoo
        }
        const items = this.state.items
        items.unshift(citiesComponent)
        this.setState({items:items});
    }

    renderItems = () => {
        return this.state.items.map ( (citiesComponent, index) => {
            return(
                <div key={index} >
                    {`City: ${citiesComponent.name}, Country: ${citiesComponent.country}, Year of foundation: ${citiesComponent.yearOfFoundation}, Population: ${citiesComponent.population}, Language: ${citiesComponent.language}, Cinema: ${citiesComponent.cinema}, Zoo: ${citiesComponent.zoo}`}
                </div>
            );
        });
    }

    render() {
        return(
            <div>
                <h2> Cities: </h2>
                <input placeholder='Name' type='text' onChange={this.onNameChange} />
                <input placeholder='Country' type='text' onChange={this.onCountryChange} />
                <input placeholder='Year Of Foundation' type='number' onChange={this.onYearOfFoundationChange} />
                <input placeholder='Population' type='number' onChange={this.onPopulationChange} />
                <input placeholder='Language' type='text' onChange={this.onLanguageChange} />
                <input placeholder='Cinema' type='bool' onChange={this.onCinemaChange} />
                <input placeholder='Zoo' type='bool' onChange={this.onZooChange} />
                <button onClick={this.push}> Push </button>
                <button onClick={this.unshift}> Unshift </button>
                <div>
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}

export default CitiesComponent;
