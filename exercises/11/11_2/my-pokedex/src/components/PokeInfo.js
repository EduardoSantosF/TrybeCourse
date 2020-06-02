import React from 'react';
import ReactDOM from 'react-dom';

class PokeInfo extends React.Component {
  render() {
    return (
      <span className="info">
        <p>Name: {this.props.data.name}</p>
        <p>Weight: {this.props.data.averageWeight.value} {this.props.data.averageWeight.measurementUnit}</p>
      </span>
    );
  }
}

function ChangePoke(data) {
  const light = document.querySelector('.lightOn');
  light.style.animation = 'lightOn 1s linear 1';
  light.addEventListener('animationend', (event)=> event.target.style.animation = '');
  document.querySelector('.image').src = data.image;
  ReactDOM.render(<PokeInfo data={data} />, document.querySelector('.poke-info'));
}
export default ChangePoke;
