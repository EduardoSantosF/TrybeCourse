import React from 'react';

class Type extends React.Component {
  render() {
    return (
      <span className={`type ${this.props.element.toLowerCase()}`}>{this.props.element}</span>
    );
  }
}

export default Type;
