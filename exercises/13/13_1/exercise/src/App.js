import React, { Component } from 'react';
import Button from './Button';
import Alert from './Alert';
import Drop from './Dropdown';

const content = [
  {id: 1, item: 'Item a'},
  {id: 2, item: 'Item b'},
  {id: 3, item: 'Item c'},
  {id: 4, item: 'Item d'},
];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      isDisableButton: false,
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  changeShowComponent = () => {
    this.setState((state) => (
      {
        showModal: !state.showModal,
        isDisableButton: !state.isDisableButton
      }
    ))
  }

  render() {
    return (
      <div className='main'>
        <Button content="Clique aqui" isDisable={this.state.isDisableButton} showComponent={this.changeShowComponent} value='Título Show' />
        {this.state.showModal &&
          <Alert>
            {{ title: "Algum título", content: "Algum conteúdo", timeSeconds: 3, hideComponent: this.changeShowComponent }}
          </Alert>}
        <Drop list={content}>title</Drop>
      </div>
    )
  }
}

export default App;
