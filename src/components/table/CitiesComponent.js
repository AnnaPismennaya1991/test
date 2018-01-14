import React, { Component } from 'react';
import cities from './cities';
import './CitiesComponent.css'

class CitiesComponent extends Component {
    state = { items:[], cityInfo: { city:'', country:'', yearOfFoundation:'', population:'', language:'', cinema:'', zoo:'' } };

    componentWillMount() {
        this.setState({items: cities});
    }

    onInputChange = (event, field) => {
        const cityInfo = this.state.cityInfo;
        cityInfo[field] = event.target.value;

        this.setState({ cityInfo });
    }

    delete = (id) => {
        const items = this.state.items.filter((item) => {
            return item.id !== id;
        });
        this.setState({items});
    }

    // onCityChange = (event) => {
    //     this.setState ({city: event.target.value });
    // }
    //
    // onCountryChange = (event) => {
    //     this.setState ({country: event.target.value });
    // }
    //
    // onYearOfFoundationChange = (event) => {
    //     this.setState ({yearOfFoundation: event.target.value });
    // }
    //
    // onPopulationChange = (event) => {
    //     this.setState ({population: event.target.value});
    // }
    //
    // onLanguageChange = (event) => {
    //     this.setState ({language: event.target.value});
    // }
    //
    // onCinemaChange = (event) => {
    //     this.setState ({cinema: event.target.value});
    // }
    //
    // onZooChange = (event) => {
    //     this.setState ({zoo: event.target.value});
    // }

    push = () => {
        // const citiesComponent = {
        //     city:this.state.city,
        //     country:this.state.country,
        //     yearOfFoundation:this.state.yearOfFoundation,
        //     population:this.state.population,
        //     language:this.state.language,
        //     cinema:this.state.cinema,
        //     zoo:this.state.zoo
        // }
        const items = this.state.items
        items.push(this.state.cityInfo)
        this.setState({ items, cityInfo: { city:'', country:'', yearOfFoundation:'', population:'', language:'', cinema:'', zoo:'' } });
    }

    unshift = () => {
        // const citiesComponent = {
        //     city:this.state.city,
        //     country:this.state.country,
        //     yearOfFoundation:this.state.yearOfFoundation,
        //     population:this.state.population,
        //     language:this.state.language,
        //     cinema:this.state.cinema,
        //     zoo:this.state.zoo
        // }
        const items = this.state.items
        items.unshift(this.state.cityInfo);
        this.setState({ items, cityInfo: { city:'', country:'', yearOfFoundation:'', population:'', language:'', cinema:'', zoo:'' } });
    }

    // renderItems = () => {
    //     return this.state.items.map ( (citiesComponent, index) => {
    //         return(
    //             <div key={index} >
    //                 {`City: ${citiesComponent.name}, Country: ${citiesComponent.country}, Year of foundation: ${citiesComponent.yearOfFoundation}, Population: ${citiesComponent.population}, Language: ${citiesComponent.language}, Cinema: ${citiesComponent.cinema}, Zoo: ${citiesComponent.zoo}`}
    //             </div>
    //         );
    //     });
    // }

    // Рендер tr строки
    renderRows = () => {
        return this.state.items.map((item, index) => {
            return(
                <tr key={index}>
                    <td>{ item.city }</td>
                    <td>{ item.country }</td>
                    <td>{ item.yearOfFoundation }</td>
                    <td>{ item.population }</td>
                    <td>{ item.language }</td>
                    <td>{ `${item.cinema}` }</td>
                    <td>{ `${item.zoo}` }</td>
                    <td className='link'>edit</td>
                    <td className='link' onClick={(event) => this.delete(item.id)}>delete</td>
                </tr>
            );
        });
    }

    render() {
        return(
            <div className='cities-component'>
                <h1 className='cities-component-h1'> Cities: </h1>
                <input placeholder='City' type='text' onChange={(event) => this.onInputChange(event, 'city')} value={this.state.cityInfo.city} />
                <input placeholder='Country' type='text' onChange={(event) => this.onInputChange(event, 'country')} value={this.state.cityInfo.country}/>
                <input placeholder='Year Of Foundation' type='number' onChange={(event) => this.onInputChange(event, 'yearOfFoundation')} value={this.state.cityInfo.yearOfFoundation}/>
                <input placeholder='Population' type='number' onChange={(event) => this.onInputChange(event, 'population')} value={this.state.cityInfo.population}/>
                <input placeholder='Language' type='text' onChange={(event) => this.onInputChange(event, 'language')} value={this.state.cityInfo.language}/>
                <input placeholder='Cinema' type='bool' onChange={(event) => this.onInputChange(event, 'cinema')} value={this.state.cityInfo.cinema}/>
                <input placeholder='Zoo' type='bool' onChange={(event) => this.onInputChange(event, 'zoo')} value={this.state.cityInfo.zoo}/>
                <button onClick={this.push}> Push </button>
                <button onClick={this.unshift}> Unshift </button>
                <table style={{ border: '1px solid #dcdcdc' }}>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Country</th>
                            <th>Year Of Foundation</th>
                            <th>Population</th>
                            <th>Language</th>
                            <th>Cinema</th>
                            <th>Zoo</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CitiesComponent;
