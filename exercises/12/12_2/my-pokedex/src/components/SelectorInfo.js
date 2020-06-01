import React from 'react';
import Type from "./Type";
import ChangePoke from './PokeInfo';

class SelectorInfo extends React.Component {
  render() {
    return (
      <span className="selector-info" onClick={() => ChangePoke(this.props.data)}>{this.props.data.name}
    <Type element={this.props.data.type}/><strong>#{this.props.data.id}</strong></span>
    );
  }
}

export default SelectorInfo;
