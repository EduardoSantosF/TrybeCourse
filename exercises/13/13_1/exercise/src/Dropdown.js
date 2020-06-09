import PropTypes from "prop-types";
import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      selected: this.props.list[0].item,
    }
  }

  changeActive = () => {
    this.setState(state => ({ active: !state.active }))
  }

  changeSelected = (ev) => {
    this.setState({selected: ev.target.innerText, active: false})
  }
  render() {
    return (
      <div>
        <h2>{this.props.children}</h2>
        <div onClick={this.changeActive}>{this.state.selected}</div>
        {this.state.active && this.props.list.map(e =>
          <div onClick={this.changeSelected} key={e.id}>{e.item}</div>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.string,
  list: PropTypes.array,
}

Dropdown.defaultProps = {
  children: 'default',
}

export default Dropdown;
