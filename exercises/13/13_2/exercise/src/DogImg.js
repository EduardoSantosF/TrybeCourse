import React from 'react';
class DogImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null,
    }
  }

  componentDidMount() {
    this.fetchDoguin();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.imgSrc ? !nextState.imgSrc.includes('terrier') : true;
  }

  fetchDoguin = () => {
    this.setState({ imgSrc: null })
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(result => result.json())
      .then(data => {
        this.setState({ imgSrc: data.message });
        localStorage.dog = data.message;
        alert(data.message.split('/')[4]);
      });
  }

  render() {
    const { imgSrc } = this.state
    return (
      <div>
        {imgSrc ? <img alt="doguinho" src={imgSrc} height="400px" /> : <h1>Loading...</h1>}
        <br /><button onClick={this.fetchDoguin}>Me de ota</button>
      </div>
    );
  }
}

export default DogImg
