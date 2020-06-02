import React from 'react';

class Type extends React.Component {
  render() {
    console.log(this.props.element);
    return (
      <span className={`type ${this.props.element.toLowerCase()}`}>{this.props.element}</span>
    );
  }
}

export default Type;
