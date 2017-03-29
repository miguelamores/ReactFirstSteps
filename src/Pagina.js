import React, { Component } from 'react';


class Pagina extends Component {
  constructor(props) {
    super(props);
    this.state= {
      opciones:[]
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
      this.setState({opciones: response});
    })
  }

  render() {
    return(
      <div>hello world</div>
      <Selector opciones={this.state.opciones} />
    )
  }
}

export default Pagina;
