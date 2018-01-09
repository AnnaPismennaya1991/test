import React, { Component } from 'react';
import countries from './countries';

class Country extends Component {
    state = { items:[] };

    componentWillMount() {
        this.setState({items: countries});
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

    render() {
        return(
            <div>
                <h2> Countries: </h2>
                {this.renderItems()}
            </div>
        );
    }
}

export default Country;
