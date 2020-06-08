import PokeSelector from "./PokeSelector";
import React from 'react';

class PokedexRight extends React.Component {
  render() {
    return (
      <div className="dex-right">
        <div className="top">
          <div className="dex-top" />
          <div className="dex-top-diagonal"><div /></div>
        </div>
        <div className="dex-content">
          <PokeSelector handler={this.props.handler}/>
          <div className="buttons">
            <div className="squareButton blue" />
            <div className="squareButton blue" />
            <div className="squareButton blue" />
            <div className="squareButton blue" />
            <div className="squareButton blue" />
            <div className="squareButton blue" />
            <div className="squareButton blue" />
            <div className="squareButton blue" />
            <div className="squareButton blue" />
            <div className="squareButton blue" />
          </div>
          <div className="dex-bot">
            <div className="buttons">
              <div className="squareButton white right-bot-border" />
              <div className="squareButton white right-bot-border" />
            </div>
            <div className="circle medium yellow right-bot-border" />
          </div>
        </div>
      </div>
    );
  }
}

export default PokedexRight;
