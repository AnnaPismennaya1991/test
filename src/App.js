import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Dropdown from './Dropdown';
import Search from './Search';
import Clicker from './components/clicker/Clicker';
import Country from './components/country/Country';
import CitiesComponent from './components/table/CitiesComponent';

class App extends Component {
  render() {
    return (
        <div className="app">
            Hello, World!
            <Search />
            <Header />
            <Dropdown />
            <hr/>
            <Clicker />
            <hr/>
            <Country />
            <hr/>
            <CitiesComponent />
        </div>
    );
  }
}

export default App;
