import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: null};
  }

  componentDidMount() {
    fetch('https://test-ldandoy.herokuapp.com/')
    .then(response => response.json())
    .then((message) => {
      this.setState({
        'message': message.message
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    return <div className="App">
      <h1>Bonjour le monde</h1>
      <p>{this.state.message}</p>
    </div>
  }
}

export default App;
