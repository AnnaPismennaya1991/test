// компонент класса
import React, { Component } from 'react';

class Clicker extends Component {

    state = {value: null, message: ''};

    add = () => {
        let value = this.state.value || 0; //логическое сложение ||, let - переменная, значение которой можно менять
        if (value == 10) {
            return this.setState({message: ''});
        }
        this.setState({value: ++value}); //setState - обновление state (++value==value+1)

        // if (value >= 5) {
        //     this.setState({message: `${value} кликов`});
        // }
        this.setState({message:value >= 0 ? `${value} кликов`: ''})
    };

    remove = () => {
        let value = this.state.value || 0;
        this.setState({value: --value}); //setState - обновление state (--value==value-1)

        // if (value < 5) {
        //     this.setState({message: ''});
        // }
        this.setState({message:value < 5 ? '': `${value} кликов`})
    };

    render () {
        return (
            <div>
                <h1> Clicker </h1>
                <button onClick={ this.add }> add click </button>
                <button onClick={ this.remove }> remove click </button>
                <div> {this.state.value} </div>
                <div> {this.state.message} </div>
            </div>
        );
    };
}

export default Clicker;


// функц. компонент
//
// import React from 'react';
//
// const Clicker = () => {
//
//     const onClick = () => {
//         console.log('clicked');
//     };
//
//     return (
//         <div>
//             <h1> Clicker </h1>
//             <button onClick={ onClick }> Нажми меня! </button>
//         </div>
//     );
// };
//
// export default Clicker;
