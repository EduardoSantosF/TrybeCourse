import React from 'react';

class PokedexLeft extends React.Component {
  render() {
    return (
      <div className="dex-left">
        <div className="top">
          <div className="top-left">
            <div className="light circle big blue">
              <div className="lightOn circle" />
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
            <img className="image" alt="" src={this.props.poke.image} />
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
          <div className="poke-info">
            <p className="info">
              {this.props.poke.info}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PokedexLeft;
