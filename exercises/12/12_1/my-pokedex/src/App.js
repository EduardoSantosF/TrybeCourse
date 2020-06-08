import React, { Component } from 'react';
import PokedexLeft from "./components/PokedexLeft";
import PokedexRight from "./components/PokedexRight";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      info: ''
    };
  }

  updatePokeHandler = ({ image, name, averageWeight: { value, measurementUnit } }) => {
    const light = document.querySelector('.lightOn');
    light.style.animation = 'lightOn 1s linear 1';
    light.addEventListener('animationend', (event) => event.target.style.animation = '');

    this.setState({
      image: image,
      info: `Name: ${name}\nWeight: ${value} ${measurementUnit}`
    });
  }

  render() {
    return (
      <div className="pokedex">
        <PokedexLeft poke={this.state} />
        <div className="joint">
          <div className="joint-top" />
          <div className="joint-content">
            <div className="gap" />
            <div className="gap" />
          </div>
        </div>
        <PokedexRight handler={this.updatePokeHandler} />
      </div>
    );
  }
}

export default App;
