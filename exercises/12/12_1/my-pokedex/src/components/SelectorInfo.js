import React from 'react';
import Type from "./Type";

class SelectorInfo extends React.Component {
  render() {
    const {name, type, id} = this.props.data;
    return (
      <span className="selector-info" onClick={() => this.props.handler(this.props.data)}>{name}
    <Type element={type}/><strong>#{id}</strong></span>
    );
  }
}

export default SelectorInfo;
