import React from 'react';
import PokeSelector from "./components/PokeSelector";
import './App.css';


function App() {
  return (
    <div className="pokedex">
      <div className="dex-left">
        <div className="top">
          <div className="top-left">
            <div className="light circle big blue">
              <div className="lightOn circle"/>
            </div>
            <div className="circle small red" />
            <div className="circle small green" />
            <div className="circle small yellow" />
          </div>
          <div className="top-diagonal"><div /></div>
          <div className="top-right" />
        </div>
        <div className="poke-window right-bot-border">
          <div className="poke-image">
            <img className="image"/>
          </div>
          <div className="under-image">
            <div className="circle small red" />
            <div className="sound-output">
              <hr /><hr /><hr />
            </div>
          </div>
        </div>
        <div className="bot">
          <div className="control">
            <div className="circle big blue right-bot-border" />
            <div className="buttons">
              <div className="button yellow right-bot-border" />
              <div className="button orange right-bot-border" />
            </div>
            <div className="joystick">+</div>
          </div>
          <div className="poke-info" />
        </div>
      </div>
      <div className="joint">
        <div className="joint-top" />
        <div className="joint-content">
          <div className="gap" />
          <div className="gap" />
        </div>
      </div>
      <div className="dex-right">
        <div className="top">
          <div className="dex-top" />
          <div className="dex-top-diagonal"><div /></div>
        </div>
        <div className="dex-content">
          <PokeSelector/>
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
            <div className="circle medium yellow right-bot-border"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
