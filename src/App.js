import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pagina from './Pagina'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      obj1: [],
      obj2: [],
      isUser: true,
      user: '',
      city: ''
    }

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => {return response.json()})
    .then(response => {
        console.log(response);
        this.setState({obj1: response});
        }
    )

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json()})
    .then(response => {
        console.log(response);
        this.setState({obj2: response});
        }
    )
  }

  handleSend(e) {
    alert("Se enviaron los datos: "+  e.target.value);
  }

  handleChangeSelect(e) {
    this.setState({user: e.target.value});
    alert("Se selecciono:"+ e.target.value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">

        </p>
        <Pagina opciones={this.state.obj1} isUser={!this.state.isUser}/>
        <Pagina opciones={this.state.obj2} isUser={this.state.isUser} onSelectChange={this.handleChangeSelect}/>
        <button onClick={this.handleSend}>Enviar</button>
      </div>
    );
  }
}

export default App;
