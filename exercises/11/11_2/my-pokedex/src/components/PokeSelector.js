import React from 'react';
import SelectorInfo from './SelectorInfo';
import Pokemons from "../Data";

class PokeSelector extends React.Component {
  render() {
    return (
      <div className="poke-selector">{Pokemons.map(poke => <SelectorInfo key={poke.id} data={poke}/>)}</div>
    );
  }
}

export default PokeSelector;
